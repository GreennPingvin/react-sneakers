import { EmptyProfile } from "entities/profile/EmptyProfile";
import { ProfileWithItems } from "entities/profile/ProfileWithItems";
import { useItems } from "shared/hooks/useItems";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const { getPurchasedItems } = useItems();

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {getPurchasedItems().length ? <ProfileWithItems /> : <EmptyProfile />}
    </div>
  );
};
