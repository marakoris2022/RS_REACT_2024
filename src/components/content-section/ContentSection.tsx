import { useEffect, useRef, useState } from 'react';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import { DialogType, PokemonData } from '../../interface/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { closeDialog, openDialog } from '../dialog/dialogStore';
import runningPokemon from '../../../public/pikachu-running.gif';

export const ContentSection = () => {
  const { pokemonDataList, type } = useSelector(
    (state: RootState) => state.pokeList
  );
  const [pageNum, setPageNum] = useState(1);
  const [viewPokemonList, setViewPokemonList] = useState<PokemonData[]>([]);
  const prevPokemonList = useRef(pokemonDataList);

  const cardSelected = useSelector(
    (state: RootState) => state.pokeCard.pokemonCard
  );

  function getPaginatePokemonList(
    pokemonDataList: PokemonData[],
    pageNum: number
  ) {
    const totalPokes = pokemonDataList.length;
    if (pageNum * 10 > totalPokes) {
      return pokemonDataList.slice((pageNum - 1) * 10);
    }
    return pokemonDataList.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10);
  }

  useEffect(() => {
    setViewPokemonList(getPaginatePokemonList(pokemonDataList, pageNum));

    if (prevPokemonList.current !== pokemonDataList) {
      setPageNum(1);
    }

    prevPokemonList.current = pokemonDataList;
  }, [pageNum, pokemonDataList]);

  useEffect(() => {
    if (type === 'Fetching') {
      openDialog(
        <div>
          Loading...
          <img src={runningPokemon.src} />
        </div>,
        DialogType.INFO
      );
    } else {
      closeDialog();
    }
  }, [type]);

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
                  pokemonList={pokemonDataList}
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
