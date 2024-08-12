import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import style from './searchSection..module.scss';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { ThemeType } from 'src/store/theme';

export const SearchSection = ({ theme }: { theme: ThemeType }) => {
  function handleSearchRequest() {}

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
          <ThemeToggle theme={theme} />
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
