import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Button";
import cls from "./CartWithOrder.module.scss";

interface CartWithOrderProps {
  className?: string;
  onBackBtnClick: () => void;
}

export const CartWithOrder = ({
  className,
  onBackBtnClick,
}: CartWithOrderProps) => {
  return (
    <div className={classNames(cls.CartWithOrder, {}, [className])}>
      <img
        width={83}
        height={120}
        src="/img/cart/order-image.jpg"
        alt="Изображение заказа"
      />
      <h3 className={cls.orderTitle}>Заказ оформлен!</h3>
      <p className={cls.orderText}>
        Ваш заказ #18 скоро будет передан курьерской доставке
      </p>
      <Button
        onClick={onBackBtnClick}
        className={cls.backBtn}
        arrowDirection={"left"}
      >
        Вернуться назад
      </Button>
    </div>
  );
};
