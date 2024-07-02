import React from 'react';
import {
  getSearchValue,
  setSearchValue,
  setSearchValueState,
} from '../../store/state';

interface ButtonProps {
  label: string;
}

function handleClick() {
  console.log(getSearchValue());
  setSearchValue('');
  setSearchValueState(getSearchValue());
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return <button onClick={handleClick}>{label}</button>;
};
