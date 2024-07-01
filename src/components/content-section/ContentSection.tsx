import { getPokemonData } from '../api/restApi';
import './contentSection.css';

export const ContentSection = () => {
  return (
    <section>
      <button
        onClick={async () => {
          console.log(await getPokemonData(String(10)));
        }}
      >
        Click
      </button>
    </section>
  );
};
