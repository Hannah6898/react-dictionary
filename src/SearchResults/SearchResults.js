import React from "react";
import Meanings from "./Meanings/Meanings";
import Phonetics from "./Phonetics/Phonetics";
import "./SearchResults.css";

export default function searchResults(props) {
  /*This if statement states the JSX will load if the results props is true
   else it will return null*/
  if (props.results) {
    return (
      <div className="search-results">
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
