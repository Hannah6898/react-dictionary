import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <h4>
          <span className="title">
            <strong>Example:</strong>{" "}
          </span>
          {props.example}
        </h4>
      </div>
    );
  } else {
    return null;
  }
}
