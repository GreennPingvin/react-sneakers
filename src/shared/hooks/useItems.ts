import { AppContext } from "app/context/AppContext";
import { sneakers } from "app/data/sneakers";
import { Sneaker } from "app/data/types";
import { useContext } from "react";
import { saveItems } from "../lib/shopItems/localStorage";

export const useItems = () => {
  const {
    cards: { items, setItems },
  } = useContext(AppContext);

  const updateState = (items: Sneaker[]) => {
    setItems(items);
    saveItems(items);
  };

  const toggleAddToCart = (item: Sneaker) => {
    const { id: itemId } = item;
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isInCart: !item.isInCart,
        };
      }
      return item;
    });
    updateState(newItems);
  };

  const isItemInCart = (item: Sneaker): boolean => {
    return item.isInCart;
  };

  const getItemsAddedToCart = (): Sneaker[] => {
    return items.filter((i) => isItemInCart(i));
  };

  const getItemsInCartTotal = (): number => {
    return getItemsAddedToCart().reduce((acc, i) => acc + i.price, 0);
  };

  const clearCart = () => {
    const newItems = items.map((i) => ({ ...i, isInCart: false }));
    updateState(newItems);
  };

  const filterItems = (searchString: string) => {
    const newFilteredItems = sneakers.filter((item) =>
      item.title.match(new RegExp(`${searchString}`, "gi")),
    );
    setItems(newFilteredItems);
  };

  const toggleAddToFavorites = (item: Sneaker) => {
    const { id: itemId } = item;
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isInFavorites: !item.isInFavorites,
        };
      }
      return item;
    });
    updateState(newItems);
  };

  const isItemInFavorites = (item: Sneaker): boolean => {
    return item.isInFavorites;
  };

  const getFavoriteItems = (): Sneaker[] => {
    return items.filter((i) => isItemInFavorites(i));
  };

  return {
    items,
    toggleAddToCart,
    toggleAddToFavorites,
    isItemInCart,
    isItemInFavorites,
    getItemsAddedToCart,
    getItemsInCartTotal,
    getFavoriteItems,
    clearCart,
    filterItems,
  };
};
