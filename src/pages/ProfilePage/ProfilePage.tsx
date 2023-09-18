import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { Title } from "widgets/Title";

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <Title hasBackBtn={true} to={"/"}>
        Мои покупки
      </Title>
    </div>
  );
};
