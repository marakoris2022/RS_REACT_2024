import { render, screen } from '@testing-library/react';
import { TestPokemon } from './__mocks__/constants';
import { GlobalStateProvider } from '../store/GlobalStateContext';
import React from 'react';

import { CardCheckbox } from '../components/content-section/section-card/card-checkbox/CardCheckbox';

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
        <CardCheckbox pokemon={TestPokemon} />
      </GlobalStateProvider>
    );

    const linkElement = screen.getAllByText(/Catch!/i);
    expect(linkElement[0]).toBeInTheDocument();
  });

  // Add more tests as needed
});
