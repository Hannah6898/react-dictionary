import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  /*This if statement states the JSX will load if the synonyms props is true 
   else it will return null*/
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <h3>Synonyms:</h3>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
