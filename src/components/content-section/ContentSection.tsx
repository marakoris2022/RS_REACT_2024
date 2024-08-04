import { useEffect, useRef, useState } from 'react';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import { PokemonListData } from '../../interface/interface';
import { useGlobalState } from '../../store/GlobalStateContext';

type ContentSectionType = {
  allPokemonNames: PokemonListData;
};

function filterPokemonsBySearchValue(
  pokemons: PokemonListData,
  serachRequest: string
) {
  const newResult = pokemons.results.filter((item) =>
    item.name.includes(serachRequest)
  );
  return {
    count: newResult.length,
    next: null,
    previous: null,
    results: newResult,
  };
}

function getPaginatePokemonList(
  pokemonDataList: PokemonListData,
  pageNum: number
) {
  const newList = { ...pokemonDataList };
  const totalPokes = newList.results.length;
  if (pageNum * 10 > totalPokes) {
    const newResults = newList.results.slice((pageNum - 1) * 10);
    newList.results = newResults;
    return newList;
  }

  const newResults = newList.results.slice(
    (pageNum - 1) * 10,
    (pageNum - 1) * 10 + 10
  );
  newList.results = newResults;
  return newList;
}

export const ContentSection = ({ allPokemonNames }: ContentSectionType) => {
  const [pageNum, setPageNum] = useState(1);
  const { state } = useGlobalState();

  const [filteredPokemons, setFilteredPokemons] =
    useState<PokemonListData>(allPokemonNames);

  const [viewPokemonList, setViewPokemonList] =
    useState<PokemonListData | null>(null);

  const prevPokemonList = useRef(allPokemonNames);

  useEffect(() => {
    setFilteredPokemons(
      filterPokemonsBySearchValue(allPokemonNames, state.filterName)
    );
  }, [state.filterName]);

  useEffect(() => {
    setViewPokemonList(getPaginatePokemonList(filteredPokemons, pageNum));

    if (prevPokemonList.current !== filteredPokemons) {
      setPageNum(1);
    }

    prevPokemonList.current = filteredPokemons;
  }, [pageNum, filteredPokemons]);

  return (
    <section style={{ width: '100%' }}>
      <div className="container">
        <div className={state.choosenCard ? style.dark : ''}>
          {viewPokemonList && viewPokemonList.results.length > 0 ? (
            <>
              <div className={style.sectionCardsWrapper}>
                {viewPokemonList &&
                  viewPokemonList.results.map((pokemon) => {
                    return (
                      <SectionCard
                        pokemonName={pokemon.name}
                        key={pokemon.name}
                      />
                    );
                  })}
              </div>
              <div>
                <Pagination
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                  totalPokes={filteredPokemons.results.length}
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
