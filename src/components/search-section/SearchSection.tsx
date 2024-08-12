import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import style from './searchSection..module.scss';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { ThemeType } from 'src/store/theme';
import { useNavigate } from '@remix-run/react';

export const SearchSection = ({
  theme,
  pageNum,
}: {
  theme: ThemeType;
  pageNum: number;
}) => {
  const navigate = useNavigate();

  const themeURL = theme.theme === 'Light' ? 'light' : 'dark';

  function handleSearchRequest(searchValue: string) {
    navigate(`/${themeURL}/${pageNum}/${searchValue}`);
  }

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
        </div>
      </div>
    </section>
  );
};
