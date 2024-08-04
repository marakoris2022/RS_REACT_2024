import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import style from './searchSection..module.scss';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../../store/theme';
import { useGlobalState } from '../../store/GlobalStateContext';

export const SearchSection = () => {
  const { setState } = useGlobalState();

  function handleSearchRequest() {
    setState((state) => {
      return {
        ...state,
        filterName: state.searchValue,
      };
    });
  }

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

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
          <ThemeToggle />
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
