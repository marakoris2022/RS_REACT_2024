import { useEffect } from 'react';
import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';
import { useLocation } from 'react-router-dom';
import { PokemonData } from '../../../interface/interface';
import { AppDispatch, setPokemonCard } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { CardCheckbox } from './card-checkbox/CardCheckbox';

type SectionCardProps = {
  pokemon: PokemonData;
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const SectionCard = ({ pokemon }: SectionCardProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pokename = queryParams.get('pokename');

  const dispatch: AppDispatch = useDispatch();

  function handleClick() {
    dispatch(setPokemonCard(pokemon));
    scrollToTop();
  }

  useEffect(() => {
    if (pokename && pokename === pokemon.name) {
      dispatch(setPokemonCard(pokemon));
    }
  }, []);

  return (
    <div
      data-testid="cardWrapper"
      className={style.cardWrapper}
      onClick={handleClick}
    >
      <div className={style.titleWrapper}>
        <h2 className={style.cardTitle}>
          {firstLetterUppercase(pokemon.name)}
        </h2>
        <div className={style.iconWrapper}>
          <PokemonIcon
            width={100}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className={style.contentWrapper}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.checkboxWrapper}
        >
          <CardCheckbox pokemon={pokemon} />
        </div>

        <div>
          <span className={style.contentTitle}>Type:</span>
          {firstLetterUppercase(pokemon.types[0].type.name)}
        </div>
        <div>
          <span className={style.contentTitle}>Experience:</span>
          {pokemon.base_experience}
        </div>
        <div>
          <span className={style.contentTitle}>Weight:</span>
          {pokemon.weight}
        </div>
      </div>
    </div>
  );
};
