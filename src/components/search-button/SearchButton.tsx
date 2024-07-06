import './searchButton.css';
import React from 'react';
import { searchButtonClick } from './searchButtonClick';

interface ButtonProps {
  label: string;
}

export const SearchButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="search__button" onClick={searchButtonClick}>
      {label}
    </button>
  );
};
