import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function searchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <h1>{props.results.word}</h1>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
