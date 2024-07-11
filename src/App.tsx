import { createContext, useState } from 'react';
import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { Dialog } from './components/dialog/Dialog';
import { ErrorBoundary } from './components/error-boundarie/ErrorBoundarie';
import { SearchSection } from './components/search-section/SearchSection';
import { PokemonData, searchPokemonListByName } from './api/restApi';

export const PokemonListContext = createContext<PokemonData[]>([]);

function App() {
  const [pokemonDataListState, setPokemonDataListState] = useState<
    PokemonData[]
  >([]);

  async function requestPokemonData(searchInput: string) {
    setPokemonDataListState([]);
    const pokemonData = await searchPokemonListByName(searchInput);
    setPokemonDataListState(pokemonData);
  }

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
