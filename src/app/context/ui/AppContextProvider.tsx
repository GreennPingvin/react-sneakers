import React, { FC, PropsWithChildren, useState } from "react";
import { getItems } from "shared/lib/shopItems/localStorage";
import { sneakers } from "../../data/sneakers";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartIsHidden, setCartIsHidden] = useState(true);
  const [itemsAddedToCart, setItemsAddedToCart] = useState(getItems() || []);
  const [filteredItems, setFilteredItems] = useState(sneakers);

  return (
    <AppContext.Provider
      value={{
        cartIsHidden,
        setCartIsHidden,
        itemsAddedToCart,
        setItemsAddedToCart,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
