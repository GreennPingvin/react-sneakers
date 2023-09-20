export const ITEMS = "ITEMS";
export const ITEMS_ADDED_TO_CART = "ITEMS_ADDED_TO_CART";
export const ITEMS_ADDED_TO_FAVS = "ITEMS_ADDED_TO_FAVS";
export const PURCHASED_ITEMS = "PURCHASED_ITEMS";

export const getItems = <T>(key: string): T[] => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveItems = <T>(items: T[], key: string) => {
  localStorage.setItem(key, JSON.stringify(items));
};
