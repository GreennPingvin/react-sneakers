import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import { ItemsList } from "widgets/ItemsList";
import { Title } from "widgets/Title";
import cls from "./FavoritesWithItems.module.scss";

interface ProfileProps {
  className?: string;
}

export const FavoritesWithItems = ({ className }: ProfileProps) => {
  const { getFavoriteItems } = useItems();

  return (
    <div className={classNames(cls.ProfileWithItems, {}, [className])}>
      <Title className={cls.title} hasBackBtn={true} to={"/"}>
        Мои закладки
      </Title>
      <ItemsList items={getFavoriteItems()} />
    </div>
  );
};
