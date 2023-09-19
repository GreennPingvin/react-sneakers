import { CartWithOrder } from "../CartWIthOrder";
import { useState } from "react";
import { useCart } from "../../../shared/hooks/useCart";
import { useItems } from "../../../shared/hooks/useItems";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Overlay } from "../../../widgets/Overlay";
import { CartWithItems } from "../CartWithItems";
import { EmptyCart } from "../EmptyCart";
import cls from "./Cart.module.scss";

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const { cartIsHidden, hideCart } = useCart();
  const { getItemsAddedToCart, clearCart } = useItems();
  const [isOrderCreated, setIsOrderCreated] = useState(false);

  const onOrderCreated = () => {
    clearCart();
    setIsOrderCreated(!isOrderCreated);
  };

  const onBackBtnCreated = () => {
    setIsOrderCreated(false);
    hideCart();
  };

  return (
    <>
      <Overlay isHidden={cartIsHidden} onClick={hideCart} />
      <div
        className={classNames(cls.Cart, { [cls.hidden]: cartIsHidden }, [
          className,
        ])}
      >
        <header className={cls.titleWrapper}>
          <div className={classNames("title", {}, [cls.title])}>Корзина</div>
          <button onClick={hideCart}>
            <img src="/icons/btn-remove.svg" alt="Кнопка закрытия корзины" />
          </button>
        </header>
        <main className={cls.mainWrapper}>
          {!isOrderCreated &&
            (getItemsAddedToCart().length ? (
              <CartWithItems onOrderCreated={onOrderCreated} />
            ) : (
              <EmptyCart />
            ))}
          {isOrderCreated && (
            <CartWithOrder onBackBtnClick={onBackBtnCreated} />
          )}
        </main>
      </div>
    </>
  );
};