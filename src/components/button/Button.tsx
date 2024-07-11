import style from './button.module.scss';

export enum ButtonType {
  GREEN = 'greenButton',
}

type ButtonProps = {
  title: string;
  btnType: ButtonType;
  onClick: () => void;
};

export const Button = ({ title, btnType, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${style.defaultButton} ${style[btnType]}`}
    >
      {title}
    </button>
  );
};
