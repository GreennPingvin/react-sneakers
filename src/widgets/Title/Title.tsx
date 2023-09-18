import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Title.module.scss";

interface TitleProps {
  className?: string;
  hasBackBtn?: boolean;
  to?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  className,
  children,
  hasBackBtn,
  to,
}) => {
  return (
    <h1 className={classNames(cls.Title, {}, [className])}>
      <div className={cls.titleWrapper}>
        {hasBackBtn && (
          <Link className={cls.backBtn} to={to}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="34"
                rx="7.5"
                fill="white"
                stroke="#F2F2F2"
              />
              <path
                d="M19 22L14 17L19 12"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
        {children}
      </div>
    </h1>
  );
};
