import { useContext, useEffect, useRef, useState } from 'react';
import { PokemonListContext } from '../../App';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { PokemonData } from '../../api/restApi';
import { Pagination } from '../pagination/Pagination';

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

  function handleCLick() {
    if (cardSelected) {
      setCardSelected(null);
    }
  }

  return (
    <section>
      <div className="container">
        <div
          className={`${style.sectionCardsWrapper} ${cardSelected ? style.dark : {}}`}
          onClick={handleCLick}
        >
          {viewPokemonList.length > 0 ? (
            <>
              {viewPokemonList.map((pokemon) => {
                return (
                  <SectionCard
                    setCardSelected={setCardSelected}
                    key={pokemon.name}
                    pokemon={pokemon}
                  />
                );
              })}
              <Pagination
                pageNum={pageNum}
                setPageNum={setPageNum}
                pokemonList={pokemonList}
              />
            </>
          ) : (
            <SearchFailed />
          )}
        </div>
      </div>
    </section>
  );
};
