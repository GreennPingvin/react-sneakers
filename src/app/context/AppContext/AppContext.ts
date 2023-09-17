import { createContext } from "react";
import { Sneaker } from "../../data/types";

export interface AppContextProps {
  cartIsHidden?: boolean;
  setCartIsHidden?: (state: boolean) => void;
  itemsAddedToCart?: Sneaker[];
  setItemsAddedToCart?: (items: Sneaker[]) => void;
  filteredItems?: Sneaker[];
  setFilteredItems?: (items: Sneaker[]) => void;
}

export const AppContext = createContext<AppContextProps>({});
