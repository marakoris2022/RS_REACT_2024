import { useContext } from 'react';
import { ButtonType, CardWrapper } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import { Button } from '../../button/Button';
import style from '../pokemonCard.module.scss';
import { ThemeContext } from '../../../store/theme';
import React from 'react';

export const CardHeader = ({
  cardSelected,
  handleClick,
  children,
}: CardWrapper) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  return (
    <div
      style={{ backgroundColor: theme.menuBackground }}
      className={style.wrapper}
    >
      <Button
        id="close-card-btn"
        title="Return"
        onClick={handleClick}
        btnType={ButtonType.RED}
      />
      <div
        style={{ background: theme.cardBackground, border: theme.cardBorder }}
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
