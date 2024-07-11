import { Button, ButtonType } from '../button/Button';
import { getSearchValue, SearchInput } from '../input/SearchInput';
import './searchSection.css';

type callbackProps = { callback: (searchInput: string) => void };

export const SearchSection = ({ callback }: callbackProps) => {
  function handleSearchRequest() {
    const searchText = getSearchValue();
    if (searchText) {
      callback(searchText);
    }
  }

  return (
    <section className="search__section">
      <div className="container">
        <div className="search__wrapper">
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
