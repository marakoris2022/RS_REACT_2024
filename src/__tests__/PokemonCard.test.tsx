import { render, screen } from '@testing-library/react';
import { TestPokemon } from './__mocks__/constants';
import { GlobalStateProvider } from '../store/GlobalStateContext';
import React from 'react';

import { PokemonCard } from '../components/card-section/PokemonCard';

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
        <PokemonCard cardSelected={TestPokemon} />
      </GlobalStateProvider>
    );

    const linkElement = screen.getAllByText(/Experience/i);
    expect(linkElement[0]).toBeInTheDocument();
  });

  // Add more tests as needed
});
