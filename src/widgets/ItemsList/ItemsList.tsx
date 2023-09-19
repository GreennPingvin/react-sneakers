import { Sneaker } from "app/data/types";
import { Card } from "entities/Card";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ItemsList.module.scss";

interface ItemsListProps {
  className?: string;
  items: Sneaker[];
}

export const ItemsList = ({ className, items }: ItemsListProps) => {
  return (
    <div className={classNames(cls.ItemsList, {}, [className])}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
