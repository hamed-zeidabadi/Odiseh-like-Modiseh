import React from "react";
import banner from "../images/banner.png";

const Card = ({ title, discount, image }) => {
  return (
    <div className="card">
      <img src={image} alt="image" className="card_img" />
      <p>{discount}</p>
      <button className="btn btn-danger">{title}</button>
    </div>
  );
};

export default Card;
