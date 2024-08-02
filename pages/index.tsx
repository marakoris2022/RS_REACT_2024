import { useContext } from 'react';
import '../styles/App.module.css';
import { ContentSection } from '../src/components/content-section/ContentSection';
import { SearchSection } from '../src/components/search-section/SearchSection';
import { PokemonCard } from '../src/components/card-section/PokemonCard';
import { MainSection } from '../src/components/main-section/MainSection';

import { ThemeContext } from '../src/store/theme';

function App() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker } = themeContext;

  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <div className="app" style={appStyle}>
      <SearchSection />
      <MainSection>
        <ContentSection />
        <PokemonCard />
      </MainSection>
    </div>
  );
}

export default App;
