import { Item } from "app/data/types";
import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

interface CardProps {
  className?: string;
  item: Item;
  hasFavBtn?: boolean;
  hasAddToCartBtn?: boolean;
}

export const Card = ({
  className,
  item,
  hasFavBtn = true,
  hasAddToCartBtn = true,
}: CardProps) => {
  const {
    isItemInCart,
    toggleAddToCart,
    isItemInFavorites,
    toggleAddToFavorites,
  } = useItems();

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <div className={cls.img}>
        <img
          width={133}
          height={112}
          src={item.imageSrc}
          alt="Изображение товара"
        />
        {hasFavBtn && (
          <button
            onClick={() => toggleAddToFavorites(item)}
            className={cls.favBtn}
          >
            <img
              width={32}
              height={32}
              src={
                isItemInFavorites(item)
                  ? "/icons/heart-liked.svg"
                  : "/icons/heart-unliked.svg"
              }
              alt="Иконка добавления в избранное"
            />
          </button>
        )}
      </div>
      <div className={cls.title}>{item.title}</div>
      <div className={cls.bottom}>
        <div className={cls.priceInfo}>
          <div className={cls.priceLabel}>цена:</div>
          <div className={cls.priceText}>{item.price} руб.</div>
        </div>
        {hasAddToCartBtn && (
          <button
            onClick={() => toggleAddToCart(item)}
            className={cls.addToCartBtn}
          >
            <img
              width={32}
              height={32}
              src={
                isItemInCart(item)
                  ? "/icons/added-to-cart-btn.svg"
                  : "/icons/add-to-cart-btn.svg"
              }
              alt="Иконка добавления в корзину"
            />
          </button>
        )}
      </div>
    </div>
  );
};
