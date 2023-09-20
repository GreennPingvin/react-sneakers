import { Item } from "app/data/types";
import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CartItem.module.scss";

interface CartItemProps {
  className?: string;
  item: Item;
}

export const CartItem = ({ className, item }: CartItemProps) => {
  const { toggleAddToCart } = useItems();

  return (
    <div className={classNames(cls.CartItem, {}, [className])}>
      <div className={cls.itemImg}>
        <img
          width={70}
          height={70}
          src={item.imageSrc}
          alt="Изображение товара"
        />
      </div>
      <div className={cls.itemDesc}>
        <div className={cls.itemTitle}>{item.title}</div>
        <div className={cls.itemPrice}>{item.price} руб.</div>
      </div>
      <button onClick={() => toggleAddToCart(item)}>
        <img
          width={32}
          height={32}
          src="/icons/btn-remove.svg"
          alt="Кнопка удаления товара из корзины"
        />
      </button>
    </div>
  );
};
