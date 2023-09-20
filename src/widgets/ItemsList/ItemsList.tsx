import { Item } from "app/data/types";
import { JSX } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ItemsList.module.scss";

interface ItemsListProps {
  className?: string;
  items: Item[];
  renderFunc: (item: Item, index?: number) => JSX.Element;
}

export const ItemsList = ({ className, items, renderFunc }: ItemsListProps) => {
  return (
    <ul className={classNames(cls.ItemsList, {}, [className])}>
      {items.map((item, i) => renderFunc(item, i))}
    </ul>
  );
};
