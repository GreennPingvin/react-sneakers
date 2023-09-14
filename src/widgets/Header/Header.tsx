import { classNames } from "../../shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import React from "react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className={cls.left}>
        <div className="logo">
          <img width={40} height={40} src="/icons/logo.svg" alt="Логотип" />
        </div>
        <div className={cls.info}>
          <h3 className={cls.text}>React Sneakers</h3>
          <div className={cls.desc}>Магазин лучших кроссовок</div>
        </div>
      </div>
      <ul className={cls.right}>
        <li className={cls.cart}>
          <button>
            <img width={18} height={18} src="/icons/cart.svg" alt="" />
          </button>
          <div className={cls.cartSum}>1205 руб.</div>
        </li>
        <li>
          <button>
            <img width={18} height={18} src="/icons/favorites.svg" alt="" />
          </button>
        </li>
        <li>
          <button>
            <img width={18} height={18} src="/icons/user.svg" alt="" />
          </button>
        </li>
      </ul>
    </header>
  );
};
