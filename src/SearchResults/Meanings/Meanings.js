import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms/Synonyms";
import Example from "./Example/Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h2>
          <strong>{props.meaning.partOfSpeech}</strong>
        </h2>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <main>
                <h4 className="definition">{definition.definition}</h4>

                <Example example={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </main>
            </div>
          );
        })}
      </section>
    </div>
  );
}
