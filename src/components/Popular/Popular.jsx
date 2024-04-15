import React from "react";

import data_product from "../../Assets/data";
import { Item } from "../Item/Item";
import "./Popular.css";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Men</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};
