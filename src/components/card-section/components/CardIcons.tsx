import { CardComponent } from '../../../interface/interface';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from '../pokemonCard.module.scss';

export const CardIcons = ({ cardSelected }: CardComponent) => (
  <div className={style.iconsWrapper}>
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
