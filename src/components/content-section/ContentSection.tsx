import { useEffect, useRef, useState } from 'react';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import { PokemonData, PokemonListData } from '../../interface/interface';
import { useSelector } from 'react-redux';
import { RootState, useGetItemsQuery } from '../../store/store';
import { getPokemonDataByNames } from '../../api/restApi';

export const ContentSection = () => {
  const { data: items, isLoading } = useGetItemsQuery();

  const [pageNum, setPageNum] = useState(1);
  const [viewPokemonList, setViewPokemonList] = useState<PokemonData[]>([]);
  const searchValue = useSelector((state: RootState) => state.core.searchValue);
  const prevPokemonList = useRef(searchValue);

  const cardSelected = useSelector(
    (state: RootState) => state.pokeCard.pokemonCard
  );

  function getPaginatePokemonList(pokemonList: PokemonData[], pageNum: number) {
    const totalPokes = pokemonList.length;
    if (pageNum * 10 > totalPokes) {
      return pokemonList.slice((pageNum - 1) * 10);
    }
    return pokemonList.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10);
  }

  function getNamesArray(items: PokemonListData) {
    const namesArr: string[] = [];
    items.results.forEach((item) => namesArr.push(item.name));
    return namesArr;
  }

  function filterPokemonsFromSearch(pokemons: PokemonListData) {
    const tempListData: PokemonListData = {
      count: 0,
      next: null,
      previous: null,
      results: pokemons.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      }),
    };
    tempListData.count = tempListData.results.length;

    return tempListData;
  }

  useEffect(() => {
    async function test() {
      const pokemonsData = await getPokemonDataByNames(
        getNamesArray(filterPokemonsFromSearch(items!))
      );

      setViewPokemonList(getPaginatePokemonList(pokemonsData, pageNum));

      if (prevPokemonList.current !== searchValue) {
        setPageNum(1);
      }

      prevPokemonList.current = searchValue;
    }

    if (items) {
      test();
    }
  }, [pageNum, items, searchValue]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section style={{ width: '100%' }}>
      <div className="container">
        <div className={cardSelected ? style.dark : ''}>
          {viewPokemonList.length > 0 ? (
            <>
              <div className={style.sectionCardsWrapper}>
                {viewPokemonList.map((pokemon) => {
                  return <SectionCard pokemon={pokemon} key={pokemon.name} />;
                })}
              </div>
              <div>
                <Pagination
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                  pokemonListLength={filterPokemonsFromSearch(items!).count}
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
