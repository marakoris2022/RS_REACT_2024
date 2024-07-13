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
import { Outlet, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/not-found-page/NotFoundPage';
import RunningPokemon from '/pikachu-running.gif';
import { PokemonCard } from './components/card-section/PokemonCard';
import { MainSection } from './components/main-section/MainSection';

export const PokemonListContext = createContext<PokemonData[]>([]);

function App() {
  const [pokemonDataListState, setPokemonDataListState] = useState<
    PokemonData[]
  >([]);

  const [cardSelected, setCardSelected] = useState<PokemonData | null>(null);

  function saveToLsIfSuccess(searchInput: string, pokemonData: PokemonData[]) {
    if (pokemonData.length) {
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

  const MainLayout = () => (
    <PokemonListContext.Provider value={pokemonDataListState}>
      <SearchSection callback={requestPokemonData} />
      <MainSection>
        <Outlet />
        <PokemonCard
          cardSelected={cardSelected}
          setCardSelected={setCardSelected}
        />
      </MainSection>
    </PokemonListContext.Provider>
  );

  return (
    <>
      <Dialog />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <ContentSection
                  cardSelected={cardSelected}
                  setCardSelected={setCardSelected}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
