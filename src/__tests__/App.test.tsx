import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../../pages/index';
import { allPokemonNames } from './__mock__';
import Layout from '../components/layout/layout';

test('render test', () => {
  render(
    <Layout>
      <App allPokemonNames={allPokemonNames} />
    </Layout>
  );
  const linkElement = screen.getByText(/Search request/i);
  expect(linkElement).toBeInTheDocument();
});
