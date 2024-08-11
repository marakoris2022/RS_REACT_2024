import { useContext } from 'react';
import { CardComponent } from '../../../interface/interface';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from '../pokemonCard.module.scss';
import { ThemeContext } from '../../../store/theme';
import React from 'react';

export const CardIcons = ({ cardSelected }: CardComponent) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  return (
    <div
      style={{ background: theme.iconBackground }}
      className={style.iconsWrapper}
    >
      <PokemonIcon
        width={120}
        height={120}
        src={cardSelected.sprites.front_default}
        alt="pokemon_img"
      />
      <PokemonIcon
        width={120}
        height={120}
        src={cardSelected.sprites.back_default}
        alt="pokemon_img"
      />
    </div>
  );
};
