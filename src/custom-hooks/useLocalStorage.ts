import { useState, Dispatch, SetStateAction } from 'react';

const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [localStorageValue, setLocalStorageValue] = useState<string>(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return value;
      } else {
        localStorage.setItem(key, defaultValue);
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  const setLocalStorageStateValue: Dispatch<SetStateAction<string>> = (
    valueOrFn
  ) => {
    let newValue: string;
    if (typeof valueOrFn === 'function') {
      const fn = valueOrFn as (prevState: string) => string;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, newValue);
    setLocalStorageValue(newValue);
  };

  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
