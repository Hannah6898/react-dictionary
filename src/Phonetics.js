import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="text">
        <em>{props.phonetics.text}</em>
      </span>
      <span className="audio-player">
        <ReactAudioPlayer src={props.phonetics.audio} onPlay controls />
      </span>
    </div>
  );
}
