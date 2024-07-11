import { Button, ButtonType } from '../button/Button';
import './searchSection.css';

export const SearchSection = () => {
  return (
    <section className="search__section">
      <div className="container">
        <div className="search__wrapper">
          <Button
            onClick={() => {}}
            btnType={ButtonType.GREEN}
            title="Search"
          />
        </div>
      </div>
    </section>
  );
};
