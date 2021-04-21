import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";

export default function Search(props) {
  const [keyword, setKeyWord] = useState(props.defaultKeyWord);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSearch(response) {
    setDefinition(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
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
      </main>
    );
  } else {
    load();
    return "loading";
  }
}
