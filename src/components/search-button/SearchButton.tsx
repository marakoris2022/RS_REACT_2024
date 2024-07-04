import './searchButton.css';
import React from 'react';
import {
  getSearchValue,
  setPokemonCardState,
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
    setPokemonCardState();
  } catch {
    setSearchValueToLocalStorage('');
    const pokeName = getSearchValue();
    clearSearchInput();
    setSectionState();
    throw new Error(`Can\'t find this Pokemon: "${pokeName}"`);
  }
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="search__button" onClick={handleClick}>
      {label}
    </button>
  );
};
