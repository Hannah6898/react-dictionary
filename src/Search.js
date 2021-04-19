import axios from "axios";
import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyWord] = useState(null);

  function handleSearch(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
    console.log(apiUrl);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <main className="Search">
      <form onSubmit={search}>
        <div className=" search-bar input-group ">
          <input
            type="search"
            className="form-control"
            placeholder="Search for a word"
            aria-label="Search bar"
            aria-describedby="button-addon2"
            onChange={handleChange}
          ></input>
          <button
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </main>
  );
}