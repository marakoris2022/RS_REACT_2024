import { useContext } from 'react';
import '../styles/App.module.css';
import { ContentSection } from '../src/components/content-section/ContentSection';
import { SearchSection } from '../src/components/search-section/SearchSection';
import { MainSection } from '../src/components/main-section/MainSection';
import React from 'react';
import { ThemeContext } from '../src/store/theme';
import { GetStaticProps } from 'next';
import { PokemonListData } from '../src/interface/interface';

export const getStaticProps: GetStaticProps = async () => {
  const allPokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=10000`;
  const fetchData = await fetch(allPokemonUrl);
  const allPokemonNames: PokemonListData = await fetchData.json();

  return {
    props: {
      allPokemonNames,
    },
  };
};

function App({ allPokemonNames }: { allPokemonNames: PokemonListData }) {
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
        <ContentSection allPokemonNames={allPokemonNames} />
      </MainSection>
    </div>
  );
}

export default App;
