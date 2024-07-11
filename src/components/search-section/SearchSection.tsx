import {
  getSearchValue,
  setSearchValueToLocalStorage,
} from '../../store/state';
import { Button, ButtonType } from '../button/Button';
import { SearchInput } from '../input/SearchInput';
import './searchSection.css';

type callbackProps = { callback: (searchInput: string) => void };

export const SearchSection = ({ callback }: callbackProps) => {
  function handleClick() {
    const searchText = getSearchValue();
    if (searchText) {
      setSearchValueToLocalStorage(searchText);
      callback(searchText);
    }
  }

  return (
    <section className="search__section">
      <div className="container">
        <div className="search__wrapper">
          <SearchInput placeholder="Search" />
          <Button
            onClick={handleClick}
            btnType={ButtonType.GREEN}
            title="Search"
          />
        </div>
      </div>
    </section>
  );
};
