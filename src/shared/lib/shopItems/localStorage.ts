import { Sneaker } from "app/data/types";

export const ITEMS = "ITEMS";

export const getItems = (): Sneaker[] => {
  return JSON.parse(localStorage.getItem(ITEMS));
};

export const saveItems = (items: Sneaker[]) => {
  localStorage.setItem(ITEMS, JSON.stringify(items));
};
