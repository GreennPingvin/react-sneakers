import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Cart.module.scss";

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  return (
    <>
      <div className="overlay"></div>
      <div className={classNames(cls.Cart, {}, [className])}>
        <div className={classNames("title", {}, [cls.title])}>Корзина</div>
        <ul className={cls.items}>
          <li className={cls.item}>
            <div className={cls.itemImg}>
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers-1.jpg"
                alt="Изображение товара"
              />
            </div>
            <div className={cls.itemDesc}>
              <div className={cls.itemTitle}>
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className={cls.itemPrice}>12999 руб.</div>
            </div>
            <button>
              <img width={32} height={32} src="/icons/btn-remove.svg" alt="" />
            </button>
          </li>
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