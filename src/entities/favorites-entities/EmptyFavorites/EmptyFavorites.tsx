import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Button";
import cls from "./EmptyFavorites.module.scss";

interface EmptyFavoritesProps {
  className?: string;
}

export const EmptyFavorites = ({ className }: EmptyFavoritesProps) => {
  return (
    <div className={classNames(cls.EmptyFavorites, {}, [className])}>
      <img
        className={cls.img}
        width={70}
        height={70}
        src="/img/favorites/crying-face.png"
        alt="Изображение плачущего лица"
      />
      <h3 className={cls.title}>Закладок нет :(</h3>
      <div className={cls.desc}>
        <p>Вы ничего не добавляли в закладки</p>
      </div>
      <Link to={"/"}>
        <Button className={cls.backBtn} arrowDirection={"left"}>
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
};
