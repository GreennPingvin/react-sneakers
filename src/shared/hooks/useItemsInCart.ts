import { AppContext } from "app/context/AppContext/AppContext";
import { Sneaker } from "app/data/types";
import { useContext } from "react";
import { saveItems } from "../lib/shopItems/localStorage";

export const useItemsInCart = () => {
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(AppContext);

  const addToCart = (sneaker: Sneaker) => {
    if (isItemInCart(sneaker)) {
      return;
    }
    const newItems = [...itemsAddedToCart, sneaker];
    setItemsAddedToCart(newItems);
    saveItems(newItems);
  };

  const removeFromCart = (sneaker: Sneaker) => {
    const newItems = itemsAddedToCart.filter((item) => item.id !== sneaker.id);
    setItemsAddedToCart(newItems);
    saveItems(newItems);
  };

  const isItemInCart = (item: Sneaker): boolean => {
    return itemsAddedToCart.find((i) => i.id === item.id) !== undefined;
  };

  const getItemsInCartTotal = (): number => {
    return itemsAddedToCart.reduce((acc, i) => acc + i.price, 0);
  };

  const clearCart = () => {
    setItemsAddedToCart([]);
    saveItems([]);
  };

  return {
    itemsAddedToCart,
    addToCart,
    removeFromCart,
    isItemInCart,
    getItemsInCartTotal,
    clearCart,
  };
};
