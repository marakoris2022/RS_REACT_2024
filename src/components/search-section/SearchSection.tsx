import { SearchButton } from '../button/SearchButton';
import { SearchInput } from '../input/SearchInput';
import './searchSection.css';

export const SearchSection = () => {
  return (
    <section>
      <SearchInput placeholder="Search..." />
      <SearchButton label="Click" />
    </section>
  );
};
