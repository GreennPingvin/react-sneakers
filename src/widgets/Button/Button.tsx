import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

type ArrowDirection = "left" | "right";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  arrowDirection?: ArrowDirection;
}

export const Button = ({
  className,
  children,
  arrowDirection,
  ...props
}: ButtonProps) => {
  const innerHtml = [<span className={cls.text}>{children}</span>];
  const arrow = (
    <img
      style={{
        transform: arrowDirection === "left" ? "rotate(180deg)" : "",
      }}
      src="/icons/arrow.svg"
      alt="Иконка стрелки"
    />
  );
  if (arrowDirection) {
    arrowDirection === "left"
      ? innerHtml.unshift(arrow)
      : innerHtml.push(arrow);
  }

  return (
    <button className={classNames(cls.Button, {}, [className])} {...props}>
      {innerHtml}
    </button>
  );
};
