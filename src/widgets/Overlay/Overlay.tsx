import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  isHidden: boolean;
  onClick?: () => void;
}

export const Overlay = ({ className, isHidden, onClick }: OverlayProps) => {
  return isHidden ? null : (
    <div
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    ></div>
  );
};
