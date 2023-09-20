import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import { ItemsList } from "widgets/ItemsList";
import { Title } from "widgets/Title";
import { Card } from "../../Card";
import cls from "./ProfileWithItems.module.scss";

interface ProfileWithItemsProps {
  className?: string;
}

export const ProfileWithItems = ({ className }: ProfileWithItemsProps) => {
  const { getPurchasedItems } = useItems();

  return (
    <div className={classNames(cls.ProfileWithItems, {}, [className])}>
      <Title className={cls.title} hasBackBtn={true} to={"/"}>
        Мои покупки
      </Title>
      <ItemsList
        items={getPurchasedItems()}
        renderFunc={(item, index) => (
          <Card
            key={index}
            item={item}
            hasFavBtn={false}
            hasAddToCartBtn={false}
          />
        )}
      />
    </div>
  );
};
