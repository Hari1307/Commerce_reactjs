import React from "react";
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Your E-Mail</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
