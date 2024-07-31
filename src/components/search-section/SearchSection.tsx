import { useDispatch, useSelector } from 'react-redux';
import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import style from './searchSection..module.scss';
import { AppDispatch, fetchPokemonData, RootState } from '../../store/store';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../store/theme';

type callbackProps = {
  toggleIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchSection = ({ toggleIsLightTheme }: callbackProps) => {
  const searchValue = useSelector((state: RootState) => state.core.searchValue);
  const dispatch = useDispatch<AppDispatch>();

  function handleSearchRequest() {
    dispatch(fetchPokemonData(searchValue));
  }

  const theme = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchPokemonData(searchValue));
  }, []);

  return (
    <section
      style={{ backgroundColor: theme.searchWrapperBackground }}
      className={style.searchSection}
    >
      <div className="container">
        <div
          style={{ backgroundColor: theme.menuBackground }}
          className={style.searchWrapper}
        >
          <ThemeToggle toggleIsLightTheme={toggleIsLightTheme} />
          <SearchInput onKeyDown={handleSearchRequest} placeholder="Search" />
          <Button
            onClick={handleSearchRequest}
            btnType={ButtonType.GREEN}
            title="Search"
          />
        </div>
      </div>
    </section>
  );
};
