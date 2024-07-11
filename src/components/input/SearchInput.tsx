import { useEffect, useState } from 'react';
import styles from './input.module.scss';
import {
  getSearchValueFromLocalStorage,
  setSearchValue,
} from '../../store/state';

type InputProps = {
  placeholder: string;
};

export const SearchInput = ({ placeholder }: InputProps) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setSearchValue(e.target.value);
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
      onChange={handleChange}
      className={styles.defaultInput}
      placeholder={placeholder}
      type="text"
    />
  );
};
