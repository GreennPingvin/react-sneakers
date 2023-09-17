import { useItemsInCart } from "shared/hooks/useItemsInCart";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Button/Button";
import { CartItem } from "../CartItem";
import cls from "./CartWithItems.module.scss";

interface CartWithItemsProps {
  className?: string;
}

export const CartWithItems = ({ className }: CartWithItemsProps) => {
  const { itemsAddedToCart, removeFromCart, getItemsInCartTotal } =
    useItemsInCart();

  return (
    <div className={classNames(cls.CartWithItems, {}, [className])}>
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
            <div className={cls.infoPrice}>
              {getItemsInCartTotal().toFixed(2)} руб.
            </div>
          </div>
          <div className={cls.infoItem}>
            <div className={cls.infoLabel}>Налог 5%:</div>
            <div className={cls.infoSeparator}></div>
            <div className={cls.infoPrice}>
              {(getItemsInCartTotal() * 0.05).toFixed(2)} руб.
            </div>
          </div>
        </div>
        <Button className={cls.orderBtn} arrowDirection={"right"}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
