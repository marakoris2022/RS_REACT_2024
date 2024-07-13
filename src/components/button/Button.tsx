import style from './button.module.scss';

export enum ButtonType {
  GREEN = 'greenButton',
  RED = 'redButton',
}

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
