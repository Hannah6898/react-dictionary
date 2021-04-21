import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h1>{props.meaning.partOfSpeech}</h1>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <h4>
                <span className="title">
                  <strong>Definition: </strong>
                </span>
                {definition.definition}
              </h4>

              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
              <hr />
            </div>
          );
        })}
      </section>
    </div>
  );
}
