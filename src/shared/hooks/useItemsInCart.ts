import { AppContext } from "app/context/AppContext/AppContext";
import { useContext } from "react";
import { Sneaker } from "app/data/types";

export const useItemsInCart = () => {
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(AppContext);

  const addToCart = (sneaker: Sneaker) => {
    setItemsAddedToCart([...itemsAddedToCart, sneaker]);
  };

  const removeFromCart = (sneaker: Sneaker) => {
    setItemsAddedToCart(
      itemsAddedToCart.filter((item) => item.id !== sneaker.id),
    );
  };

  return {
    itemsAddedToCart,
    addToCart,
    removeFromCart,
  };
};
