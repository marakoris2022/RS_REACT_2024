import { render, screen } from '@testing-library/react';
import { GlobalStateProvider } from '../store/GlobalStateContext';
import React from 'react';

import { SectionCard } from '../components/content-section/section-card/SectionCard';

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
        <SectionCard pokemonName={'pikachu'} />
      </GlobalStateProvider>
    );

    const linkElement = screen.getAllByText(/Loading.../i);
    expect(linkElement[0]).toBeInTheDocument();
  });

  // Add more tests as needed
});
