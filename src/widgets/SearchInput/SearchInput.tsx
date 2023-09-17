import { InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SearchInput.module.scss";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={classNames(cls.SearchInput, {}, [className])}>
      <img width="14" height="14" src="/icons/search.svg" alt="Иконка поиска" />
      <input
        className={cls.input}
        type="text"
        placeholder="Поиск..."
        {...props}
      />
    </div>
  );
};
