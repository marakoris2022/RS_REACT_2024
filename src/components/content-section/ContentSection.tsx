import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { PokemonData } from '../../interface/interface';
import { ThemeType } from 'src/store/theme';

type ContentSectionProps = {
  viewPokemonListData: PokemonData[];
  theme: ThemeType;
};

export const ContentSection = ({
  viewPokemonListData,
  theme,
}: ContentSectionProps) => {
  return (
    <section style={{ width: '100%' }}>
      <div className="container">
        <div>
          {viewPokemonListData.length > 0 ? (
            <>
              <div className={style.sectionCardsWrapper}>
                {viewPokemonListData.map((pokemon) => {
                  return (
                    <SectionCard
                      theme={theme}
                      pokemon={pokemon}
                      key={pokemon.name}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <SearchFailed theme={theme} />
          )}
        </div>
      </div>
    </section>
  );
};
