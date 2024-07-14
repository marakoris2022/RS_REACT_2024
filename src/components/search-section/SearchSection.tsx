import { ButtonType } from '../../interface/interface';
import { Button } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import { getSearchValue } from '../input/searchInputStore';
import style from './searchSection..module.scss';

type callbackProps = { callback: (searchInput: string) => void };

export const SearchSection = ({ callback }: callbackProps) => {
  function handleSearchRequest() {
    callback(getSearchValue());
  }

  return (
    <section className={style.searchSection}>
      <div className="container">
        <div className={style.searchWrapper}>
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
