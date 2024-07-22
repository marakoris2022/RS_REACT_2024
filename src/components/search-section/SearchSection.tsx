import { useSelector } from 'react-redux';
import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import style from './searchSection..module.scss';
import { RootState } from '../../store/store';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../../store/theme';

type callbackProps = {
  requestPokemonData: (searchInput: string) => void;
  toggleIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchSection = ({
  requestPokemonData,
  toggleIsLightTheme,
}: callbackProps) => {
  const searchValue = useSelector((state: RootState) => state.core.searchValue);

  function handleSearchRequest() {
    requestPokemonData(searchValue);
  }

  const theme = useContext(ThemeContext);

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
