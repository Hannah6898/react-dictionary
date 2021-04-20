import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";

export default function searchResults(props) {
  if (props.results) {
    return (
      <main className="SearchResults">
        <section>
          <h1>{props.results.word}</h1>
          <h2>{props.results.phonetics[0].text}</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </main>
    );
  } else {
    return null;
  }
}
