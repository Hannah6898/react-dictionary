import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h1>{props.meaning.partOfSpeech}</h1>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h4>
              Definition: {definition.definition}
              <br />
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </h4>
          </div>
        );
      })}
    </div>
  );
}
