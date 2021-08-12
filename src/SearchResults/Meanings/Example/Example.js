import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <h4>{props.example}</h4>
      </div>
    );
  } else {
    return null;
  }
}
