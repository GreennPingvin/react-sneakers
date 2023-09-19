import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Button/Button";
import cls from "./EmptyProfile.module.scss";

interface EmptyProfileProps {
  className?: string;
}

export const EmptyProfile = ({ className }: EmptyProfileProps) => {
  return (
    <div className={classNames(cls.EmptyProfile, {}, [className])}>
      <img
        className={cls.img}
        width={70}
        height={70}
        src="/img/profile/sad-smile.png"
        alt="Изображение грустного лица"
      />
      <h3 className={cls.title}>У вас нет заказов</h3>
      <div className={cls.desc}>
        <p>Вы нищеброд?</p>
        <p>Оформите хотя бы один заказ.</p>
      </div>
      <Link to={"/"}>
        <Button className={cls.backBtn} arrowDirection={"left"}>
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
};
