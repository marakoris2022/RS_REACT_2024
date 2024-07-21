import { createContext, useEffect, useState } from 'react';
import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { Dialog } from './components/dialog/Dialog';
import { ErrorBoundary } from './components/error-boundarie/ErrorBoundarie';
import { SearchSection } from './components/search-section/SearchSection';
import { getSearchValueFromLocalStorage } from './utils/utils';
import { Outlet, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/not-found-page/NotFoundPage';
import RunningPokemon from '/pikachu-running.gif';
import { PokemonCard } from './components/card-section/PokemonCard';
import { MainSection } from './components/main-section/MainSection';
import { DialogType, PokemonData } from './interface/interface';
import { closeDialog, openDialog } from './components/dialog/dialogStore';
import { useDispatch } from 'react-redux';
import { AppDispatch, fetchPokemonData } from './store/store';
import { Inventory } from './components/inventory/Inventory';

export const PokemonListContext = createContext<PokemonData[]>([]);

function App() {
  const dispatch: AppDispatch = useDispatch();

  const dialogContent = (
    <div>
      Loading... <img src={RunningPokemon} />
    </div>
  );

  async function requestPokemonData(searchInput: string) {
    openDialog(dialogContent, DialogType.INFO);
    await dispatch(fetchPokemonData(searchInput));
    closeDialog();
  }

  useEffect(() => {
    const searchValue = getSearchValueFromLocalStorage();
    requestPokemonData(searchValue ?? '');
  }, []);

  const MainLayout = () => (
    // <PokemonListContext.Provider value={pokemonDataList}>
    <>
      <SearchSection callback={requestPokemonData} />
      <Inventory />
      <MainSection>
        <Outlet />
        <PokemonCard />
      </MainSection>
    </>
    // </PokemonListContext.Provider>
  );

  return (
    <>
      <Dialog />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ContentSection />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
