import { useEffect, useState } from 'react';
import styles from './input.module.scss';
import { getSearchValueFromLocalStorage } from '../../utils/utils';
import useLocalStorage from '../../custom-hooks/useLocalStorage';
import { Button } from '../button/Button';
import { ButtonType } from 'src/interface/interface';

type InputProps = {
  placeholder: string;
  onKeyDown: (searchValue: string) => void;
};

export const SearchInput = ({ placeholder, onKeyDown }: InputProps) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanedValue: string = e.target.value.replace(/[^a-zA-Z]/g, '');

    setValue(cleanedValue.toLocaleLowerCase());
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === 'NumpadEnter' || e.code === 'Enter') {
      onKeyDown(value);
    }
  }

  useEffect(() => {
    const searchValueFromLS = getSearchValueFromLocalStorage();
    if (searchValueFromLS) {
      setValue(searchValueFromLS);
    }
  }, []);

  return (
    <div>
      <input
        style={{ marginRight: '15px' }}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.defaultInput}
        placeholder={placeholder}
        type="text"
      />
      <Button
        onClick={() => onKeyDown(value)}
        btnType={ButtonType.GREEN}
        title="Search"
      />
    </div>
  );
};
