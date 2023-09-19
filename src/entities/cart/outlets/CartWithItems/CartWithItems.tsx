import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Button/Button";
import { CartItem } from "../../CartItem";
import cls from "./CartWithItems.module.scss";

interface CartWithItemsProps {
  className?: string;
  onOrderCreated: () => void;
}

export const CartWithItems = ({
  className,
  onOrderCreated,
}: CartWithItemsProps) => {
  const { getItemsAddedToCart, getItemsInCartTotal } = useItems();

  return (
    <div className={classNames(cls.CartWithItems, {}, [className])}>
      <ul className={cls.items}>
        {getItemsAddedToCart().map((item) => (
          <CartItem key={item.id} item={item} />
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
        <Button
          className={cls.orderBtn}
          arrowDirection={"right"}
          onClick={onOrderCreated}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
