import { EmptyProfile } from "entities/profile/EmptyProfile";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <EmptyProfile />
    </div>
  );
};
