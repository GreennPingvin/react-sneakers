import { createContext } from "react";

export interface AppContextProps {
  cartIsHidden?: boolean;
  setCartIsHidden?: (state: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({});
