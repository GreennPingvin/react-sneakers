import { classNames } from "shared/lib/classNames/classNames";
import { Title } from "widgets/Title";
import cls from "./FavoritesPage.module.scss";

interface FavoritesPageProps {
  className?: string;
}

export const FavoritesPage = ({ className }: FavoritesPageProps) => {
  return (
    <div className={classNames(cls.FavoritesPage, {}, [className])}>
      <Title hasBackBtn={true} to="/">
        Мои закладки
      </Title>
    </div>
  );
};
