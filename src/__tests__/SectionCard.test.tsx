// src/__tests__/SectionCard.test.tsx
import { render, screen } from '@testing-library/react';
import { SectionCard } from '../components/content-section/section-card/SectionCard';
import { vi } from 'vitest';
import React from 'react';
import Layout from '../components/layout/layout';

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    reload: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
  }),
}));

vi.mock('../../../api/restApi', () => ({
  getPokemonDataByName: vi.fn().mockResolvedValue({
    name: 'squirtle',
    sprites: { front_default: 'some-url' },
    types: [{ type: { name: 'water' } }],
    base_experience: 63,
    weight: 90,
  }),
}));

test('renders SectionCard with pokemon name', async () => {
  render(
    <Layout>
      <SectionCard pokemonName="squirtle" />
    </Layout>
  );

  const nameElement = await screen.findByText(/squirtle/i);
  expect(nameElement).toBeInTheDocument();
});
