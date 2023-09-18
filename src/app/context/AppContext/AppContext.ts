import { createContext } from "react";
import { Sneaker } from "../../data/types";

type SetItems = (items: Sneaker[]) => void;

interface Cart {
  isHidden: boolean;
  setIsHidden: (flag: boolean) => void;
}

interface Cards {
  items: Sneaker[];
  setItems: SetItems;
}

export interface AppContextProps {
  cards?: Cards;
  cart?: Cart;
}

export const AppContext = createContext<AppContextProps>({});
