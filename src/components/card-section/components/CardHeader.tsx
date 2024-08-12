import { useContext } from 'react';
import { ButtonType, CardWrapper } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import { Button } from '../../button/Button';
import style from '../pokemonCard.module.scss';

export const CardHeader = ({
  themePicker,
  cardSelected,
  handleClick,
  children,
}: CardWrapper) => {
  return (
    <div
      style={{ backgroundColor: themePicker.menuBackground }}
      className={style.wrapper}
    >
      <Button
        id="close-card-btn"
        title="X"
        onClick={handleClick}
        btnType={ButtonType.RED}
      />
      <div
        style={{
          background: themePicker.cardBackground,
          border: themePicker.cardBorder,
        }}
        className={style.pokemonCardWrapper}
      >
        <p className={style.pokemonCardTitle}>
          {firstLetterUppercase(cardSelected.name)}
        </p>
        {children}
      </div>
    </div>
  );
};
