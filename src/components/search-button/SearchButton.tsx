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
import { getPokemonDataByName } from '../../api/restApi';

interface ButtonProps {
  label: string;
}

export async function searchButtonClick() {
  if (getSearchValue()) {
    try {
      await getPokemonDataByName(getSearchValue());
      setSearchValueToLocalStorage(getSearchValue());
      setPokemonCardState();
    } catch {
      setSearchValueToLocalStorage('');
      const pokeName = getSearchValue();
      throw new Error(`Can\'t find this Pokemon: "${pokeName}"`);
    } finally {
      setSectionState();
    }
  }
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="search__button" onClick={searchButtonClick}>
      {label}
    </button>
  );
};
