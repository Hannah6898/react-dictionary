import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="text">
        <em>{props.phonetics.text}</em>
      </span>
      <a href={props.phonetics.audio} target="_blank">
        Listen
      </a>
    </div>
  );
}
