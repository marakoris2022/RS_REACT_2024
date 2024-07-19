import style from './pokemonCard.module.scss';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setPokemonCard } from '../../store/store';
import { updateQueryParams } from '../../utils/utils';
import { CardHeader } from './components/CardHeader';
import { CardIcons } from './components/CardIcons';
import { CardStats } from './components/CardStats';
import { CardAbilities } from './components/CardAbilities';
import { CardItems } from './components/CardItems';
import { CardSpecialMoves } from './components/CardSpecialMoves';
import { CardBodyCharacteristics } from './components/CardBodyCharacteristics';

type CardSectionProps = {};

export const PokemonCard = ({}: CardSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cardSelected = useSelector(
    (state: RootState) => state.pokeCard.pokemonCard
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (cardSelected) {
      updateQueryParams({ pokename: cardSelected.name }, navigate, location);
    }
  }, [cardSelected]);

  function handleClick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    const target = e.target as HTMLElement;
    if (target.id === 'close-card-back' || target.id === 'close-card-btn') {
      updateQueryParams({ pokename: '' }, navigate, location);
      dispatch(setPokemonCard(null));
    }
  }

  return (
    <section
      onClick={handleClick}
      className={`${style.background} ${cardSelected ? style.backgroundActive : ''}`}
      id="close-card-back"
    >
      {cardSelected ? (
        <CardHeader cardSelected={cardSelected} handleClick={handleClick}>
          <>
            <CardIcons cardSelected={cardSelected} />
            <CardStats cardSelected={cardSelected} />
            <div className={style.abilItemsWrapper}>
              <CardAbilities cardSelected={cardSelected} />
              <CardItems cardSelected={cardSelected} />
            </div>
            <CardSpecialMoves cardSelected={cardSelected} />
            <CardBodyCharacteristics cardSelected={cardSelected} />
          </>
        </CardHeader>
      ) : null}
    </section>
  );
};
