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
