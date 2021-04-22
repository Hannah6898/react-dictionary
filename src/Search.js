import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";
import Images from "./Images";

export default function Search(props) {
  const [keyword, setKeyWord] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionarySearch(response) {
    setDefinition(response.data[0]);
  }

  function handleImageSearch(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionarySearch);

    let pexelsApiKey =
      "563492ad6f91700001000001aa19275a0b944cb79a191d78d3e28e4b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handleImageSearch);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <main className="Search">
        <form onSubmit={handleSubmit}>
          <div className=" search-bar input-group ">
            <input
              type="search"
              className="form-control"
              placeholder="Search for a word"
              aria-label="Search bar"
              aria-describedby="button-addon2"
              onChange={handleChange}
            ></input>
          </div>
        </form>
        <SearchResults results={definition} />
        <Images photos={photos} />
      </main>
    );
  } else {
    load();
    return "Loading";
  }
}
