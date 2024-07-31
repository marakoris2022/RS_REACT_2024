import { useEffect, useState } from 'react';
import './App.css';
import { ContentSection } from './components/content-section/ContentSection';
import { Dialog } from './components/dialog/Dialog';
import { ErrorBoundary } from './components/error-boundarie/ErrorBoundarie';
import { SearchSection } from './components/search-section/SearchSection';
import { getSearchValueFromLocalStorage } from './utils/utils';
import { NotFoundPage } from './components/not-found-page/NotFoundPage';
import RunningPokemon from '../public/pikachu-running.gif';
import { PokemonCard } from './components/card-section/PokemonCard';
import { MainSection } from './components/main-section/MainSection';
import { DialogType } from './interface/interface';
import { closeDialog, openDialog } from './components/dialog/dialogStore';
import { useDispatch } from 'react-redux';
import { AppDispatch, fetchPokemonData } from './store/store';
import { Inventory } from './components/inventory/Inventory';
import { ThemeContext, themeSettings } from './store/theme';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const dialogContent = (
    <div>
      Loading... <img src={RunningPokemon.src} />
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

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;
  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <ThemeContext.Provider value={themePicker}>
      <div className="app" style={appStyle}>
        <Dialog />
        <ErrorBoundary>
          <SearchSection
            requestPokemonData={requestPokemonData}
            toggleIsLightTheme={toggleIsLightTheme}
          />
          <Inventory />
          <MainSection>
            <Routes>
              <Route path="/" element={<ContentSection />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <PokemonCard />
          </MainSection>
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
