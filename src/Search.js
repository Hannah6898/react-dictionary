import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <main className="Search">
      <form>
        <div class=" search-bar input-group ">
          <input
            type="text"
            class="form-control"
            placeholder="Search for a word"
            aria-label="Search bar"
            aria-describedby="button-addon2"
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
