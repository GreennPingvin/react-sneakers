import { Card } from "entities/Card";
import { ChangeEvent, useState } from "react";
import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import { ItemsList } from "widgets/ItemsList";
import { SearchInput } from "widgets/SearchInput";
import { ImgSlider } from "widgets/Slider";
import { Title } from "widgets/Title";
import cls from "./HomePage.module.scss";

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  const { items, filterItems } = useItems();
  const [searchString, setSearchString] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchString = e.target.value;
    setSearchString(newSearchString);
    filterItems(newSearchString);
  };

  return (
    <div className={classNames(cls.HomePage, {}, [className])}>
      <ImgSlider />
      <div className={cls.titleWrapper}>
        <Title>Все кроссовки</Title>
        <SearchInput value={searchString} onChange={onInputChange} />
      </div>
      <ItemsList
        items={items}
        renderFunc={(item, key) => <Card key={key} item={item} />}
      />
    </div>
  );
};
