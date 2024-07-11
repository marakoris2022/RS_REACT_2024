import { createContext, useEffect, useState } from 'react';
import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import {
  closeDialog,
  Dialog,
  DialogType,
  openDialog,
} from './components/dialog/Dialog';
import { ErrorBoundary } from './components/error-boundarie/ErrorBoundarie';
import { SearchSection } from './components/search-section/SearchSection';
import { PokemonData, searchPokemonListByName } from './api/restApi';
import {
  getSearchValueFromLocalStorage,
  setSearchValueToLocalStorage,
} from './utils/utils';

export const PokemonListContext = createContext<PokemonData[]>([]);

enum SearchLimit {
  NoLimit = '10000',
  Limited = '100',
}

function App() {
  const [pokemonDataListState, setPokemonDataListState] = useState<
    PokemonData[]
  >([]);

  function saveToLsIfSuccess(searchInput: string, pokemonData: PokemonData[]) {
    if (searchInput && pokemonData.length) {
      setSearchValueToLocalStorage(searchInput);
    }
  }

  async function requestPokemonData(searchInput: string) {
    openDialog('Loading', DialogType.INFO);
    setPokemonDataListState([]);
    const pokemonData = await searchPokemonListByName(
      searchInput,
      searchInput ? SearchLimit.NoLimit : SearchLimit.Limited
    );
    saveToLsIfSuccess(searchInput, pokemonData);
    setPokemonDataListState(pokemonData);
    closeDialog();
  }

  useEffect(() => {
    const searchValue = getSearchValueFromLocalStorage();
    if (searchValue) {
      requestPokemonData(searchValue);
      return;
    }
    requestPokemonData('');
  }, []);

  return (
    <>
      <Dialog />
      <ErrorBoundary>
        <>
          <PokemonListContext.Provider value={pokemonDataListState}>
            <SearchSection callback={requestPokemonData} />
            <ContentSection />
          </PokemonListContext.Provider>
        </>
      </ErrorBoundary>
    </>
  );
}

export default App;
