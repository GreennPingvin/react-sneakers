import React, { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "../AppContext";
import { getItems } from "shared/lib/shopItems/localStorage";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartIsHidden, setCartIsHidden] = useState(true);
  const [itemsAddedToCart, setItemsAddedToCart] = useState(getItems() || []);

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
