import React, { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartIsHidden, setCartIsHidden] = useState(true);
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]);

  return (
    <AppContext.Provider
      value={{
        cartIsHidden,
        setCartIsHidden,
        itemsAddedToCart,
        setItemsAddedToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
