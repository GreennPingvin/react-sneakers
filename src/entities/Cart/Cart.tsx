import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Cart.module.scss";
import { useCart } from "shared/hooks/useCart";
import { Overlay } from "widgets/Overlay";
import { useItemsInCart } from "shared/hooks/useItemsInCart";
import { CartItem } from "../CartItem";

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const { cartIsHidden, hideCart } = useCart();
  const { itemsAddedToCart, removeFromCart } = useItemsInCart();

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

        <ul className={cls.items}>
          {itemsAddedToCart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemoveFromCart={() => removeFromCart(item)}
            />
          ))}
        </ul>
        <div className={cls.info}>
          <div className={cls.infoItems}>
            <div className={cls.infoItem}>
              <div className={cls.infoLabel}>Итого:</div>
              <div className={cls.infoSeparator}></div>
              <div className={cls.infoPrice}>21498 руб.</div>
            </div>
            <div className={cls.infoItem}>
              <div className={cls.infoLabel}>Налог 5%:</div>
              <div className={cls.infoSeparator}></div>
              <div className={cls.infoPrice}>1074 руб.</div>
            </div>
          </div>
          <button className={cls.orderBtn}>Оформить заказ</button>
        </div>
      </div>
    </>
  );
};
