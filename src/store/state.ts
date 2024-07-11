import { PokemonData } from '../api/restApi';

export type State = {
  value: string;
};

export type PokemonState = {
  pokemon: PokemonData | null;
};

export type PokemonListState = {
  pokemons:
    | {
        name: string;
        url: string;
      }[]
    | null;
  additionalData: PokemonData[] | null;
};

type _State = {
  url: string;
  search: {
    value: string;
  };
  pagination: {
    settings: {
      offset: number;
      limit: number;
    };
    data: {
      count: number;
      nextPage: null;
      prevPage: null;
    };
  };
};

const _state: _State = {
  url: 'https://pokeapi.co/api/v2/',
  search: {
    value: '',
  },
  pagination: {
    settings: {
      offset: 0,
      limit: 10,
    },
    data: {
      count: 0,
      nextPage: null,
      prevPage: null,
    },
  },
};

export const getSearchValueFromLocalStorage = () => {
  const value = localStorage.getItem('searchValue');
  return value ?? '';
};

export const setSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem('searchValue', value);
};

export const getBaseUrl = () => {
  return _state.url;
};

export const getPaginationSettings = () => {
  return _state.pagination.settings;
};

export const setSearchValue = (searchValue: string) => {
  _state.search.value = searchValue;
};

export const getSearchValue = () => {
  return _state.search.value;
};

setSearchValue(getSearchValueFromLocalStorage());
