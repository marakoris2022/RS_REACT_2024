import { useEffect, useState } from 'react';
import { PokemonData } from '../../api/restApi';
import style from './pokemonCard.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../utils/utils';

type CardSectionProps = {
  cardSelected: PokemonData | null;
  setCardSelected: React.Dispatch<React.SetStateAction<PokemonData | null>>;
};

export const PokemonCard = ({
  cardSelected,
  setCardSelected,
}: CardSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (cardSelected) {
      updateQueryParams({ pokename: cardSelected?.name! }, navigate, location);
      setActive(true);
    }
  }, [cardSelected]);

  function handleCLick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    const target = e.target as HTMLElement;
    if (target.id === 'close-card-back' || target.id === 'close-card-btn') {
      setActive(false);
      updateQueryParams({ pokename: '' }, navigate, location);
      setTimeout(() => {
        setCardSelected(null);
      }, 300);
    }
  }

  return (
    <div
      onClick={handleCLick}
      className={`${style.background} ${active ? style.active : ''}`}
      id="close-card-back"
    >
      <div className={`${style.wrapper} `}>
        This is Card Section
        <p>Card selected: {cardSelected ? 'Yes' : 'No'}</p>
        <p> {cardSelected ? cardSelected.name : ''}</p>
        <button id="close-card-btn" onClick={handleCLick}>
          Close
        </button>
      </div>
    </div>
  );
};
