import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import SearchResults from "../SearchResults/SearchResults";
import Images from "../Images/Images";

export default function Search(props) {
  /*useState used to capture the change that occurs to different elements
  upon the users search*/
  const [keyword, setKeyWord] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  //This function holds the dictionary search data from the api call
  function handleDictionarySearch(response) {
    setDefinition(response.data[0]);
  }
  //This function holds the images from the api call
  function handleImageSearch(response) {
    setPhotos(response.data.photos);
  }
  /*When the form in the JSX is submit this function runs. event.preventDefault()
   prevents the page from reloading upon running the function.*/
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //This function is making two api calls to receive the definitions on the word search and the images
  function search() {
    let pexelsApiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionarySearch);
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handleImageSearch);
  }

  //When the user types a word into the input this function collects this value
  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  /*This function sets loaded to true calling the search function*/
  function load() {
    setLoaded(true);
    search();
  }
  /*This if statement states the JSX will load if loaded is set to true
   else the load function will be called*/
  if (loaded) {
    return (
      <main className="search">
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
