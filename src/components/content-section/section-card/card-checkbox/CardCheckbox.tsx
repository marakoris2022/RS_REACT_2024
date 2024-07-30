import React, { useEffect, useState } from 'react';
import { PokemonData } from '../../../../interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { addPoke, removePoke, RootState } from '../../../../store/store';

type CheckboxProps = {
  pokemon: PokemonData;
};

function isPokemonChosen(pokemon: PokemonData, chosenPokes: PokemonData[]) {
  if (!chosenPokes) return false;
  for (let i = 0; i < chosenPokes.length; i++) {
    if (chosenPokes[i].name === pokemon.name) return true;
  }
  return false;
}

export const CardCheckbox = ({ pokemon }: CheckboxProps) => {
  const dispatch = useDispatch();
  const chosenPokes = useSelector(
    (state: RootState) => state.pokeList.chosenPokes
  );
  const [checked, setChecked] = useState(isPokemonChosen(pokemon, chosenPokes));

  useEffect(() => {
    setChecked(isPokemonChosen(pokemon, chosenPokes));
  }, [chosenPokes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (isChecked) {
      dispatch(addPoke(pokemon));
    } else {
      dispatch(removePoke(pokemon));
    }
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {isPokemonChosen(pokemon, chosenPokes) ? 'In Inventory.' : 'Catch!'}
    </label>
  );
};
