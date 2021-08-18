import React from "react";
import "./Example.css";

export default function Example(props) {
  /*This if statement states the JSX will load if the example props is true
   else it will return null*/
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
