import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyWord] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <main className="Search">
      <form onSubmit={search}>
        <div class=" search-bar input-group ">
          <input
            type="search"
            class="form-control"
            placeholder="Search for a word"
            aria-label="Search bar"
            aria-describedby="button-addon2"
            onChange={handleChange}
          ></input>
          <button
            class="btn btn-outline-light"
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
