import React, { useContext } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../components/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="shop-banner">
      <img src={props.banner} alt="banner" />

      </div>
      <div className="shop-categoey-item">
        {all_product.map((val, i) => {
          if (val.category === props.category) {
            return (
              <Item
                key={i}
                image={val.image}
                old_price={val.old_price}
                new_price={val.new_price}
                name={val.name}
              />
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
};
