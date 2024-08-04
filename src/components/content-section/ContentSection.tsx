import { useEffect, useRef, useState } from 'react';
import { SectionCard } from './section-card/SectionCard';
import style from './contentSection.module.scss';
import { SearchFailed } from './search-failed/SearchFailed';
import { Pagination } from '../pagination/Pagination';
import {
  DialogType,
  PokemonData,
  PokemonListData,
} from '../../interface/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { closeDialog, openDialog } from '../dialog/dialogStore';
import runningPokemon from '../../../public/pikachu-running.gif';

export const ContentSection = ({
  allPokemonNames,
}: {
  allPokemonNames: PokemonListData;
}) => {
  // const { pokemonDataList, type } = useSelector(
  //   (state: RootState) => state.pokeList
  // );
  const [pageNum, setPageNum] = useState(1);

  const [viewPokemonList, setViewPokemonList] =
    useState<PokemonListData | null>(null);

  const prevPokemonList = useRef(allPokemonNames);

  const cardSelected = useSelector(
    (state: RootState) => state.pokeCard.pokemonCard
  );

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

  useEffect(() => {
    setViewPokemonList(getPaginatePokemonList(allPokemonNames, pageNum));

    if (prevPokemonList.current !== allPokemonNames) {
      setPageNum(1);
    }

    prevPokemonList.current = allPokemonNames;
  }, [pageNum, allPokemonNames]);

  // useEffect(() => {
  //   if (type === 'Fetching') {
  //     openDialog(
  //       <div>
  //         Loading...
  //         <img src={runningPokemon.src} />
  //       </div>,
  //       DialogType.INFO
  //     );
  //   } else {
  //     closeDialog();
  //   }
  // }, [type]);

  return (
    <section style={{ width: '100%' }}>
      <div className="container">
        <div className={cardSelected ? style.dark : ''}>
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
                  totalPokes={allPokemonNames.results.length}
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
