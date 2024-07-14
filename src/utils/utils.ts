import { NavigateFunction, Location } from 'react-router-dom';

type QueryParams = {
  [key: string]: string;
};

export const updateQueryParams = (
  newParams: QueryParams,
  navigate: NavigateFunction,
  location: Location
) => {
  const updatedSearchParams = new URLSearchParams(location.search);
  Object.keys(newParams).forEach((key) => {
    updatedSearchParams.set(key, newParams[key]);
  });
  navigate({ search: updatedSearchParams.toString() }, { replace: true });
};

export function firstLetterUppercase(word: string): string {
  if (!word) {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getSearchValueFromLocalStorage = () => {
  const value = localStorage.getItem('searchValue');
  return value ?? '';
};

export const setSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem('searchValue', value);
};
