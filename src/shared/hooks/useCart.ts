import { AppContext } from "app/context/AppContext";
import { useCallback, useContext } from "react";

export const useCart = () => {
  const {
    cart: { isHidden, setIsHidden },
  } = useContext(AppContext);

  const onEscapePressed = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      hideCart();
    }
  }, []);

  const showCart = () => {
    setIsHidden(false);
    window.addEventListener("keydown", onEscapePressed);
  };

  const hideCart = () => {
    setIsHidden(true);
    window.removeEventListener("keydown", onEscapePressed);
  };

  return {
    cartIsHidden: isHidden,
    showCart,
    hideCart,
  };
};
