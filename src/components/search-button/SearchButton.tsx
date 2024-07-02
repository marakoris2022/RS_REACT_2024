import React from 'react';
import {
  getSearchValue,
  setSearchValue,
  setSearchValueState,
  setSearchValueToLocalStorage,
} from '../../store/state';

interface ButtonProps {
  label: string;
}

function handleClick() {
  console.log(getSearchValue());
  setSearchValueToLocalStorage(getSearchValue());
  setSearchValue('');
  setSearchValueState(getSearchValue());
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return <button onClick={handleClick}>{label}</button>;
};
