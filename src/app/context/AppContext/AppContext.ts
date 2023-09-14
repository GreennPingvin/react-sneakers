import { createContext } from "react";

export interface AppContextProps {
  cartIsOpen?: boolean;
  setCartIsOpen?: (state: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({});
