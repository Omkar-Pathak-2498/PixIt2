import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const IamgeList = (props) => {
  const images = props.imagesArray.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default IamgeList;
