import { Link } from "react-router-dom";
import { useCart } from "shared/hooks/useCart";
import { classNames } from "shared/lib/classNames/classNames";
import { useItems } from "shared/hooks/useItems";
import cls from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { showCart } = useCart();
  const { getItemsInCartTotal } = useItems();

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <Link className={cls.left} to={"/"}>
        <div className="logo">
          <img width={40} height={40} src="/icons/logo.svg" alt="Логотип" />
        </div>
        <div className={cls.info}>
          <h3 className={cls.text}>React Sneakers</h3>
          <div className={cls.desc}>Магазин лучших кроссовок</div>
        </div>
      </Link>
      <ul className={cls.right}>
        <li className={cls.cart}>
          <button onClick={showCart}>
            <img
              width={18}
              height={18}
              src="/icons/cart.svg"
              alt="Иконка корзины"
            />
            <div className={cls.cartSum}>{getItemsInCartTotal()} руб.</div>
          </button>
        </li>
        <li>
          <Link to={"/favorites"}>
            <img
              width={18}
              height={18}
              src="/icons/favorites.svg"
              alt="Иконка избранного"
            />
          </Link>
        </li>
        <li>
          <Link to={"/profile"}>
            <img
              width={18}
              height={18}
              src="/icons/user.svg"
              alt="Иконка профиля"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};
