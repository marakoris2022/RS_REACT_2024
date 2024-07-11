import { useEffect, useState } from 'react';
import styles from './input.module.scss';
import {
  getSearchValueFromLocalStorage,
  setSearchValue,
} from '../../store/state';

type InputProps = {
  placeholder: string;
  onKeyDown: () => void;
};

export const SearchInput = ({ placeholder, onKeyDown }: InputProps) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanedValue: string = e.target.value.replace(/[^a-zA-Z]/g, '');

    setValue(cleanedValue.toLocaleLowerCase());
    setSearchValue(cleanedValue.toLocaleLowerCase());
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === 'NumpadEnter' || e.code === 'Enter') {
      onKeyDown();
    }
  }

  useEffect(() => {
    const searchValueFromLS = getSearchValueFromLocalStorage();
    if (searchValueFromLS) {
      setValue(searchValueFromLS);
      setSearchValue(searchValueFromLS);
    }
  }, []);

  return (
    <input
      value={value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      className={styles.defaultInput}
      placeholder={placeholder}
      type="text"
    />
  );
};
