import { useContext, useEffect, useRef, useState } from 'react';
import { PokemonListContext } from '../../App';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import { PokemonData } from '../../interface/interface';

type ContentSectionProps = {
  cardSelected: PokemonData | null;
  setCardSelected: React.Dispatch<React.SetStateAction<PokemonData | null>>;
};

export const ContentSection = ({
  cardSelected,
  setCardSelected,
}: ContentSectionProps) => {
  const pokemonList = useContext(PokemonListContext);
  const [pageNum, setPageNum] = useState(1);
  const [viewPokemonList, setViewPokemonList] = useState<PokemonData[]>([]);
  const prevPokemonList = useRef(pokemonList);

  function getPaginatePokemonList(pokemonList: PokemonData[], pageNum: number) {
    const totalPokes = pokemonList.length;
    if (pageNum * 10 > totalPokes) {
      return pokemonList.slice((pageNum - 1) * 10);
    }
    return pokemonList.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10);
  }

  useEffect(() => {
    setViewPokemonList(getPaginatePokemonList(pokemonList, pageNum));

    if (prevPokemonList.current !== pokemonList) {
      setPageNum(1);
    }

    prevPokemonList.current = pokemonList;
  }, [pageNum, pokemonList]);

  return (
    <section style={{ width: '100%' }}>
      <div className="container">
        <div className={cardSelected ? style.dark : ''}>
          {viewPokemonList.length > 0 ? (
            <>
              <div className={style.sectionCardsWrapper}>
                {viewPokemonList.map((pokemon) => {
                  return (
                    <SectionCard
                      setCardSelected={setCardSelected}
                      key={pokemon.name}
                      pokemon={pokemon}
                    />
                  );
                })}
              </div>
              <div>
                <Pagination
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                  pokemonList={pokemonList}
                />
              </div>
            </>
          ) : (
            <SearchFailed />
          )}
        </div>
      </div>
    </section>
  );
};
