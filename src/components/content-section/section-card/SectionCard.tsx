import { useEffect } from 'react';
import { PokemonData } from '../../../api/restApi';
import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';
import { useLocation } from 'react-router-dom';

type SectionCardProps = {
  setCardSelected: React.Dispatch<React.SetStateAction<PokemonData | null>>;
  pokemon: PokemonData;
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const SectionCard = ({ setCardSelected, pokemon }: SectionCardProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let pokename = queryParams.get('pokename');

  function handleClick() {
    setCardSelected(pokemon);
    scrollToTop();
  }

  useEffect(() => {
    if (pokename && pokename === pokemon.name) {
      setCardSelected(pokemon);
    }
  }, []);

  return (
    <div className={style.cardWrapper} onClick={handleClick}>
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
