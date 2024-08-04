import style from './pokemonCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setPokemonCard } from '../../store/store';
import { CardHeader } from './components/CardHeader';
import { CardIcons } from './components/CardIcons';
import { CardStats } from './components/CardStats';
import { CardAbilities } from './components/CardAbilities';
import { CardItems } from './components/CardItems';
import { CardSpecialMoves } from './components/CardSpecialMoves';
import { CardBodyCharacteristics } from './components/CardBodyCharacteristics';
import { useGlobalState } from '../../store/GlobalStateContext';

export const PokemonCard = () => {
  const { state, setState } = useGlobalState();
  let cardSelected = state.choosenCard;

  function handleClick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    const target = e.target as HTMLElement;
    if (target.id === 'close-card-back' || target.id === 'close-card-btn') {
      setState((state) => {
        return { ...state, choosenCard: null };
      });
    }
  }

  return (
    <section
      onClick={handleClick}
      className={`${style.background} ${cardSelected ? style.backgroundActive : ''}`}
      id="close-card-back"
      data-testid="close-card-back"
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
