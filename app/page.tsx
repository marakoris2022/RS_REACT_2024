import type { Metadata } from 'next';
import { SearchSection } from '../src/components/search-section/SearchSection';
import { ContentSection } from '../src/components/content-section/ContentSection';
import { getPokemonData } from '../src/api/restApi';
import { MainSection } from '../src/components/main-section/MainSection';
import React from 'react';

export const metadata: Metadata = {
  title: 'My Page Title',
};

export default async function Page() {
  const allPokemonNames = await getPokemonData('1', 10000);

  return (
    <MainSection>
      <SearchSection />
      <ContentSection allPokemonNames={allPokemonNames} />
    </MainSection>
  );
}
