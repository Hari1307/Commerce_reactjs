import React from "react";
import Hero from "../components/Hero/Hero";
import { Offers } from "../components/Offers/Offers";
import { Popular } from "../components/Popular/Popular";

import "../CSS/Shop.css";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";

export const Shop = () => {
  return (
    <div className="shop">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
