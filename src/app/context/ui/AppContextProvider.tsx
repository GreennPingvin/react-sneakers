import React, { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartIsHidden, setCartIsHidden] = useState(true);

  return (
    <AppContext.Provider value={{ cartIsHidden, setCartIsHidden }}>
      {children}
    </AppContext.Provider>
  );
};
