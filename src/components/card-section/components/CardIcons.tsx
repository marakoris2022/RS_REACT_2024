import { useContext } from 'react';
import { CardComponent } from '../../../interface/interface';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from '../pokemonCard.module.scss';
import { ThemeContext } from '../../../store/theme';

export const CardIcons = ({ cardSelected }: CardComponent) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ background: theme.iconBackground }}
      className={style.iconsWrapper}
    >
      <PokemonIcon
        width={120}
        src={cardSelected.sprites.front_default}
        alt="pokemon_img"
      />
      <PokemonIcon
        width={120}
        src={cardSelected.sprites.back_default}
        alt="pokemon_img"
      />
    </div>
  );
};
