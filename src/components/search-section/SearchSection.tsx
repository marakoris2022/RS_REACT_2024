import { Button, ButtonType } from '../button/Button';
import { getSearchValue, SearchInput } from '../input/SearchInput';
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
