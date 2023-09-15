import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { useState } from "react";
import { Sneaker } from "app/data/types";
import { useItemsInCart } from "shared/hooks/useItemsInCart";

interface CardProps {
  className?: string;
  item: Sneaker;
  onTogglePlusClick: () => void;
}

export const Card = ({ className, item, onTogglePlusClick }: CardProps) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const { itemsAddedToCart } = useItemsInCart();

  const onAddToFavoritesBtnClick = () => {
    setIsAddedToFavorites(!isAddedToFavorites);
  };

  const onAddToCartBtnCLick = () => {
    onTogglePlusClick();
  };

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <div className={cls.img}>
        <img
          width={133}
          height={112}
          src={item.imageSrc}
          alt="Изображение товара"
        />
        <button onClick={onAddToFavoritesBtnClick} className={cls.favBtn}>
          <img
            width={32}
            height={32}
            src={
              isAddedToFavorites
                ? "/icons/heart-liked.svg"
                : "/icons/heart-unliked.svg"
            }
            alt="Иконка добавления в избранное"
          />
        </button>
      </div>
      <div className={cls.title}>{item.title}</div>
      <div className={cls.bottom}>
        <div className={cls.priceInfo}>
          <div className={cls.priceLabel}>цена:</div>
          <div className={cls.priceText}>{item.price} руб.</div>
        </div>
        <button onClick={onAddToCartBtnCLick} className={cls.addToCartBtn}>
          <img
            width={32}
            height={32}
            src={
              itemsAddedToCart.includes(item)
                ? "/icons/added-to-cart-btn.svg"
                : "/icons/add-to-cart-btn.svg"
            }
            alt="Иконка добавления в корзину"
          />
        </button>
      </div>
    </div>
  );
};
