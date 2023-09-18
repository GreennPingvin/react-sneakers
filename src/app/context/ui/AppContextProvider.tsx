import React, { FC, PropsWithChildren, useState } from "react";
import { getItems } from "shared/lib/shopItems/localStorage";
import { sneakers } from "../../data/sneakers";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState(getItems() || sneakers);
  const [cartIsHidden, setCartIsHidden] = useState(true);

  return (
    <AppContext.Provider
      value={{
        cart: { isHidden: cartIsHidden, setIsHidden: setCartIsHidden },
        cards: { items, setItems },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
