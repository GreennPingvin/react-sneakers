import { useContext } from "react";
import { AppContext } from "app/context/AppContext";

export const useCart = () => {
  const { cartIsOpen, setCartIsOpen } = useContext(AppContext);

  const showCart = () => {
    setCartIsOpen(true);
  };

  const hideCart = () => {
    setCartIsOpen(false);
  };

  return {
    cartIsOpen,
    showCart,
    hideCart,
  };
};
