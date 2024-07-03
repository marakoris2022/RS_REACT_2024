import React from 'react';
import {
  getSearchValue,
  setSearchValue,
  setSearchValueState,
  setSearchValueToLocalStorage,
  setSectionState,
} from '../../store/state';
import { getPokemonDataByName } from '../api/restApi';

interface ButtonProps {
  label: string;
}

function clearSearchInput() {
  setSearchValue('');
  setSearchValueState(getSearchValue());
}

async function handleClick() {
  try {
    const pokemonData = await getPokemonDataByName(getSearchValue());
    console.log(pokemonData);
    setSearchValueToLocalStorage(getSearchValue());
    setSectionState();
    clearSearchInput();
  } catch {
    setSearchValueToLocalStorage('');
    const pokeName = getSearchValue();
    clearSearchInput();
    setSectionState();
    throw new Error(`Can\'t find this Pokemon: "${pokeName}"`);
  }
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return <button onClick={handleClick}>{label}</button>;
};
