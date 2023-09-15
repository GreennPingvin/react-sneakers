import { useCallback, useContext } from "react";
import { AppContext } from "app/context/AppContext";

export const useCart = () => {
  const { cartIsHidden, setCartIsHidden } = useContext(AppContext);

  const onEscapePressed = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      hideCart();
    }
  }, []);

  const showCart = () => {
    setCartIsHidden(false);
    window.addEventListener("keydown", onEscapePressed);
  };

  const hideCart = () => {
    setCartIsHidden(true);
    window.removeEventListener("keydown", onEscapePressed);
  };

  return {
    cartIsHidden,
    showCart,
    hideCart,
  };
};
