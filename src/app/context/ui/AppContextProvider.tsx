import React, { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "../AppContext";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ cartIsOpen, setCartIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};
