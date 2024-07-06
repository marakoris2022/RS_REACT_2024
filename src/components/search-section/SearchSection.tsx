import { ErrorButton } from '../error-button/ErrorButton';
import { SearchButton } from '../search-button/SearchButton';
import { SearchInput } from '../search-input/SearchInput';
import './searchSection.css';

export const SearchSection = () => {
  return (
    <section className="search__section">
      <div className="container">
        <div className="search__wrapper">
          <SearchInput placeholder="Search..." />
          <SearchButton label="Catch" />
          <ErrorButton title="Call Error" />
        </div>
      </div>
    </section>
  );
};
