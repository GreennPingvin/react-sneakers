import { classNames } from "shared/lib/classNames/classNames";
import cls from "./EmptyCart.module.scss";
import { Button } from "widgets/Button/Button";
import { useCart } from "shared/hooks/useCart";

interface EmptyCartProps {
  className?: string;
}

export const EmptyCart = ({ className }: EmptyCartProps) => {
  const { hideCart } = useCart();

  return (
    <div className={classNames(cls.EmptyCart, {}, [className])}>
      <img
        width={120}
        height={120}
        src="/img/cart/empty-box.png"
        alt="Изображение пустой коробки"
      />
      <h2 className={cls.subtitle}>Корзина пустая</h2>
      <p className={cls.text}>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <Button
        onClick={hideCart}
        className={cls.backBtn}
        arrowDirection={"left"}
      >
        Вернуться назад
      </Button>
    </div>
  );
};
