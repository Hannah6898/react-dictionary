import React from "react";
import Meanings from "./Meanings";

export default function searchResults(props) {
  if (props.results) {
    return (
      <main>
        <section>
          <h1>{props.results.word}</h1>
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
