import React from "react";
import exculsive_image from "../../Assets/exclusive_image.png";
import "./Offers.css";
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exculsive_image} alt="offer" />
      </div>
    </div>
  );
};
