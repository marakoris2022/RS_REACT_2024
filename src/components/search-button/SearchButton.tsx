import './searchButton.css';
import React from 'react';
import {
  getSearchValue,
  setPokemonCardState,
  setSearchValueToLocalStorage,
  setSectionState,
} from '../../store/state';
import { getPokemonDataByName } from '../../api/restApi';
import { useDialog } from '../dialog/Dialog';

interface ButtonProps {
  label: string;
}

export async function searchButtonClick() {
  const openDialog = useDialog();
  if (getSearchValue()) {
    try {
      await getPokemonDataByName(getSearchValue());
      setSearchValueToLocalStorage(getSearchValue());
      setPokemonCardState();
    } catch {
      setSearchValueToLocalStorage('');
      const pokeName = getSearchValue();
      openDialog(`Can\'t find this Pokemon: "${pokeName}"`);
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
