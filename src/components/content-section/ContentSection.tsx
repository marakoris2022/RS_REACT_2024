import { useEffect, useRef, useState } from 'react';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import { PokemonData } from '../../interface/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type ContentSectionProps = {};

export const ContentSection = ({}: ContentSectionProps) => {
  const pokemonList = useSelector((state: RootState) => {
    return state.pokeList.pokemonDataList;
  });
  const [pageNum, setPageNum] = useState(1);
  const [viewPokemonList, setViewPokemonList] = useState<PokemonData[]>([]);
  const prevPokemonList = useRef(pokemonList);

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
                  return <SectionCard pokemon={pokemon} key={pokemon.name} />;
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
