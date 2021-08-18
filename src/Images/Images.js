import React from "react";
import "./Images.css";

export default function Images(props) {
  /*This if statement states the JSX will load if the photos props is true
   else it will return null*/
  if (props.photos) {
    return (
      <div className="images">
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="Search"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
