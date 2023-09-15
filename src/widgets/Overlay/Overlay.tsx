import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  isHidden: boolean;
}

export const Overlay = ({ className, isHidden }: OverlayProps) => {
  return isHidden ? null : (
    <div className={classNames(cls.Overlay, {}, [className])}></div>
  );
};
