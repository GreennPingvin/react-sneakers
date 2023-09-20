import React, { FC, PropsWithChildren, useState } from "react";
import {
  getItems,
  ITEMS,
  ITEMS_ADDED_TO_CART,
  ITEMS_ADDED_TO_FAVS,
  PURCHASED_ITEMS,
} from "shared/lib/shopItems/localStorage";
import { sneakers } from "../../data/sneakers";
import { Item } from "../../data/types";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  // Items
  const [items, setItems] = useState(getItems<Item>(ITEMS) || sneakers);
  const [addedToCartItems, setAddedToCartItems] = useState(
    getItems<Item>(ITEMS_ADDED_TO_CART) || [],
  );
  const [addedToFavsItems, setAddedToFavsItems] = useState(
    getItems<Item>(ITEMS_ADDED_TO_FAVS) || [],
  );
  const [purchasedItems, setPurchasedItems] = useState(
    getItems<Item>(PURCHASED_ITEMS) || [],
  );
  // Cart
  const [cartIsHidden, setCartIsHidden] = useState(true);

  return (
    <AppContext.Provider
      value={{
        cart: { isHidden: cartIsHidden, setIsHidden: setCartIsHidden },
        cards: {
          items,
          setItems,
          addedToCartItems,
          setAddedToCartItems,
          addedToFavsItems,
          setAddedToFavsItems,
          purchasedItems,
          setPurchasedItems,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
