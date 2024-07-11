import { PokemonData } from '../../../api/restApi';
import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';

type SectionCardProps = {
  pokemon: PokemonData;
};

export const SectionCard = ({ pokemon }: SectionCardProps) => {
  return (
    <div className={style.cardWrapper} onClick={() => {}}>
      <p className={style.cardTitle}>{firstLetterUppercase(pokemon.name)}</p>
      <div className={style.iconWrapper}>
        <PokemonIcon
          width={30}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <p>Type: {firstLetterUppercase(pokemon.types[0].type.name)}</p>
      <p>Experience: {pokemon.base_experience}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};
