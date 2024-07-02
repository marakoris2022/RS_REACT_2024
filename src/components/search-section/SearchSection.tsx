import { SearchButton } from '../search-button/SearchButton';
import { SearchInput } from '../search-input/SearchInput';
import './searchSection.css';

export const SearchSection = () => {
  return (
    <section>
      <SearchInput placeholder="Search..." />
      <SearchButton label="Click" />
    </section>
  );
};
