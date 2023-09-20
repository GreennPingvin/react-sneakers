import { createContext, Dispatch, SetStateAction } from "react";
import { Item } from "../../data/types";

export type SetItems<T> = Dispatch<SetStateAction<T>>;

interface Cart {
  isHidden: boolean;
  setIsHidden: (flag: boolean) => void;
}

interface Cards<T> {
  items: T;
  setItems: SetItems<T>;
  addedToCartItems: T;
  setAddedToCartItems: SetItems<T>;
  addedToFavsItems: T;
  setAddedToFavsItems: SetItems<T>;
  purchasedItems: T;
  setPurchasedItems: SetItems<T>;
}

export interface AppContextProps {
  cards?: Cards<Item[]>;
  cart?: Cart;
}

export const AppContext = createContext<AppContextProps>({});
