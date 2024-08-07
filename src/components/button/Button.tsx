import { ButtonType } from '../../interface/interface';
import style from './button.module.scss';
import React from 'react';

type ButtonProps = {
  title: string;
  btnType: ButtonType;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  id?: string;
};

export const Button = ({ title, btnType, onClick, id }: ButtonProps) => {
  return (
    <button
      id={id ?? ''}
      type="submit"
      onClick={onClick}
      className={`${style.defaultButton} ${style[btnType]}`}
    >
      {title}
    </button>
  );
};
