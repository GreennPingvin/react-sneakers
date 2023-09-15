import { Sneaker } from "app/data/types";

export const ITEMS_IN_CART = "ITEMS_IN_CART";

export const getItems = (): Sneaker[] => {
  return JSON.parse(localStorage.getItem(ITEMS_IN_CART));
};

export const saveItems = (items: Sneaker[]) => {
  localStorage.setItem(ITEMS_IN_CART, JSON.stringify(items));
};
