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
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/not-found-page/NotFoundPage';
import RunningPokemon from '/pikachu-running.gif';

export const PokemonListContext = createContext<PokemonData[]>([]);

function App() {
  const [pokemonDataListState, setPokemonDataListState] = useState<
    PokemonData[]
  >([]);

  function saveToLsIfSuccess(searchInput: string, pokemonData: PokemonData[]) {
    if (searchInput && pokemonData.length) {
      setSearchValueToLocalStorage(searchInput);
    }
  }

  const dialogContent = (
    <div>
      Loading... <img src={RunningPokemon} />
    </div>
  );

  async function requestPokemonData(searchInput: string) {
    openDialog(dialogContent, DialogType.INFO);
    setPokemonDataListState([]);
    const pokemonData = await searchPokemonListByName(searchInput);
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
        <PokemonListContext.Provider value={pokemonDataListState}>
          <SearchSection callback={requestPokemonData} />

          <Routes>
            <Route path="/" element={<ContentSection />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PokemonListContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
