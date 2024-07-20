import React, { useState } from 'react';
import { PokemonData } from '../../../../interface/interface';
import { useDispatch } from 'react-redux';
import { addPoke, removePoke } from '../../../../store/store';

type CheckboxProps = {
  pokemon: PokemonData;
  isActive: boolean;
  label?: string;
};

export const CardCheckbox = ({ pokemon, isActive, label }: CheckboxProps) => {
  const [checked, setChecked] = useState(isActive);
  const dispatch = useDispatch();

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
      {label}
    </label>
  );
};
