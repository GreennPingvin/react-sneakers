import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Cart.module.scss";
import { useCart } from "shared/hooks/useCart";
import { Overlay } from "widgets/Overlay";
import { CartWithItems } from "../CartWithItems";
import { EmptyCart } from "../EmptyCart";
import { useItemsInCart } from "../../shared/hooks/useItemsInCart";

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const { cartIsHidden, hideCart } = useCart();
  const { itemsAddedToCart } = useItemsInCart();

  return (
    <>
      <Overlay isHidden={cartIsHidden} onClick={hideCart} />
      <div
        className={classNames(cls.Cart, { [cls.hidden]: cartIsHidden }, [
          className,
        ])}
      >
        <div className={cls.titleWrapper}>
          <div className={classNames("title", {}, [cls.title])}>Корзина</div>
          <button onClick={hideCart}>
            <img src="/icons/btn-remove.svg" alt="Кнопка закрытия корзины" />
          </button>
        </div>
        {itemsAddedToCart.length ? <CartWithItems /> : <EmptyCart />}
      </div>
    </>
  );
};
