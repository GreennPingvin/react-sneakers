import { EmptyFavorites } from "entities/favorites/EmptyFavorites";
import { FavoritesWithItems } from "entities/favorites/FavoritesWithItems";
import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./FavoritesPage.module.scss";

interface FavoritesPageProps {
  className?: string;
}

export const FavoritesPage = ({ className }: FavoritesPageProps) => {
  const { getFavoriteItems } = useItems();

  return (
    <div className={classNames(cls.FavoritesPage, {}, [className])}>
      {getFavoriteItems().length ? <FavoritesWithItems /> : <EmptyFavorites />}
    </div>
  );
};
