import { useState } from 'react';
import '../styles/App.module.css';
import { ContentSection } from '../src/components/content-section/ContentSection';
import { Dialog } from '../src/components/dialog/Dialog';
import { SearchSection } from '../src/components/search-section/SearchSection';
import { PokemonCard } from '../src/components/card-section/PokemonCard';
import { MainSection } from '../src/components/main-section/MainSection';
import { Provider } from 'react-redux';
import { Inventory } from '../src/components/inventory/Inventory';
import { ThemeContext, themeSettings } from '../src/store/theme';
import { store } from '../src/store/store';

function App() {
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;
  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themePicker}>
        <div className="app" style={appStyle}>
          <Dialog />
          <SearchSection toggleIsLightTheme={toggleIsLightTheme} />
          <Inventory />
          <MainSection>
            <ContentSection />
            <PokemonCard />
          </MainSection>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
