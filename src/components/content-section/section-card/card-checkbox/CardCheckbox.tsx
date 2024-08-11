import React, { useEffect, useState } from 'react';
import { PokemonData } from '../../../../interface/interface';
import { useGlobalState } from '../../../../store/GlobalStateContext';

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
  const { state, setState } = useGlobalState();
  const [checked, setChecked] = useState(
    isPokemonChosen(pokemon, state.chosenPokes)
  );

  useEffect(() => {
    setChecked(isPokemonChosen(pokemon, state.chosenPokes));
  }, [state.chosenPokes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    if (isChecked) {
      setState((prevState) => ({
        ...prevState,
        chosenPokes: [...prevState.chosenPokes, pokemon],
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        chosenPokes: prevState.chosenPokes.filter(
          (poke) => poke.name !== pokemon.name
        ),
      }));
    }
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {isPokemonChosen(pokemon, state.chosenPokes) ? 'In Inventory.' : 'Catch!'}
    </label>
  );
};
