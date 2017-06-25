import React from "react";
import Gallery from "./Gallery";
import "./Title.css";

const Title = ({ mainTitle, subTitle }) =>
  <div className="Title-container">
    <center className="Title-textContainer">
      <h1 className="Title-text">{mainTitle}</h1>
      <h3 className="Title-text">{subTitle}</h3>
    </center>
    <div className="Title-galleryContainer">
      <Gallery />
    </div>

  </div>;

export default Title;
