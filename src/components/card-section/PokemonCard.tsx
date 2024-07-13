import { useContext } from 'react';
import { PokemonListContext } from '../../App';
import { PokemonData } from '../../api/restApi';
import style from './pokemonCard.module.scss';

type CardSectionProps = {
  cardSelected: PokemonData | null;
  setCardSelected: React.Dispatch<React.SetStateAction<PokemonData | null>>;
};

export const PokemonCard = ({
  cardSelected,
  setCardSelected,
}: CardSectionProps) => {
  const pokemonList = useContext(PokemonListContext);

  return (
    <div className={style.wrapper} style={{ background: 'red' }}>
      This is Card Section
      <p>Card selected: {cardSelected ? 'Yes' : 'No'}</p>
      <p> {cardSelected ? cardSelected.name : ''}</p>
      <button
        onClick={() => {
          setCardSelected(null);
        }}
      >
        Close
      </button>
    </div>
  );
};
