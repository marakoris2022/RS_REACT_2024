import { useEffect } from 'react';
import styles from './input.module.scss';
import { getSearchValueFromLocalStorage } from '../../utils/utils';
import useLocalStorage from '../../custom-hooks/useLocalStorage';
import { setSerchValue } from './searchInputStore';

type InputProps = {
  placeholder: string;
  onKeyDown: () => void;
};

export const SearchInput = ({ placeholder, onKeyDown }: InputProps) => {
  const [value, setValue] = useLocalStorage('searchValue', '');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanedValue: string = e.target.value.replace(/[^a-zA-Z]/g, '');

    setValue(cleanedValue.toLocaleLowerCase());
    setSerchValue(cleanedValue.toLocaleLowerCase());
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
      setSerchValue(searchValueFromLS);
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
