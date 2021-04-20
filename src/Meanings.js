import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <main>
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
