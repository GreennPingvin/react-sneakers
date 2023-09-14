import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { useState } from "react";

interface CardProps {
  className?: string;
  imgSrc: string;
  title: string;
  price: string | number;
}

export const Card = ({ className, imgSrc, title, price }: CardProps) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onAddToFavoritesBtnClick = () => {
    setIsAddedToFavorites(!isAddedToFavorites);
  };

  const onAddToCartBtnCLick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <div className={cls.img}>
        <img width={133} height={112} src={imgSrc} alt="Изображение товара" />
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
      <div className={cls.title}>{title}</div>
      <div className={cls.bottom}>
        <div className={cls.priceInfo}>
          <div className={cls.priceLabel}>цена:</div>
          <div className={cls.priceText}>{price} руб.</div>
        </div>
        <button onClick={onAddToCartBtnCLick} className={cls.addToCartBtn}>
          <img
            width={32}
            height={32}
            src={
              isAddedToCart
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
