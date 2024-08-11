import { render, screen } from '@testing-library/react';
import { allPokemonNames } from './__mocks__/constants';
import { GlobalStateProvider } from '../store/GlobalStateContext';
import React from 'react';
import { Dialog } from '../components/dialog/Dialog';
import { Inventory } from '../components/inventory/Inventory';
import { MainSection } from '../components/main-section/MainSection';
import { SearchSection } from '../components/search-section/SearchSection';
import { ContentSection } from '../components/content-section/ContentSection';

// Mock useRouter
vi.mock('next/navigation', () => ({
  useRouter: vi.fn().mockImplementation(() => ({
    push: vi.fn(),
  })),
}));

describe('Page', () => {
  it('renders correctly with mocked data', async () => {
    render(
      <GlobalStateProvider>
        <Dialog />
        <Inventory />
        <MainSection>
          <SearchSection />
          <ContentSection allPokemonNames={allPokemonNames} />
        </MainSection>
      </GlobalStateProvider>
    );

    const linkElement = screen.getAllByText(/Loading.../i);
    expect(linkElement[0]).toBeInTheDocument();
  });

  // Add more tests as needed
});
