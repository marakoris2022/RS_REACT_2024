import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import App from '../../_pages/index';
import { allPokemonNames } from './__mocks__/constants';
import Layout from '../components/layout/layout';

vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(null),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    basePath: '',
  }),
}));

test('renders App with allPokemonNames', () => {
  render(
    <Layout>
      <App allPokemonNames={allPokemonNames} />
    </Layout>
  );

  const linkElement = screen.getByText(/Pokes found:/i);
  expect(linkElement).toBeInTheDocument();
});
