import React, { createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProider = (props) => {
  const contextValues = { all_product };

  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProider;
