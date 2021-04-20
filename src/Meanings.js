import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <main className="Meanings">
      <h1>{props.meaning.partOfSpeech}</h1>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {definition.example}
            </p>
          </div>
        );
      })}
    </main>
  );
}
