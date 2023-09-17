import { useCart } from "shared/hooks/useCart";
import { useItemsInCart } from "shared/hooks/useItemsInCart";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { showCart } = useCart();
  const { getItemsInCartTotal } = useItemsInCart();

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
          <button onClick={showCart}>
            <img width={18} height={18} src="/icons/cart.svg" alt="" />
            <div className={cls.cartSum}>{getItemsInCartTotal()} руб.</div>
          </button>
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
