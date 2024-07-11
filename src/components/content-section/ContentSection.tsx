import { useContext } from 'react';
import { PokemonListContext } from '../../App';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { Loading } from '../loading/Loading';

export const ContentSection = () => {
  const data = useContext(PokemonListContext);

  return (
    <section>
      <div className="container">
        <div className={style.sectionCardsWrapper}>
          {data.length > 0 ? (
            data.map((pokemon) => {
              return <SectionCard key={pokemon.name} pokemon={pokemon} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};
