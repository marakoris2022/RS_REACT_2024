import { render, screen } from '@testing-library/react';
import { closeDialog, openDialog } from '../components/dialog/dialogStore';
import { DialogType } from '../interface/interface';
import React, { act } from 'react';
import Layout from '../components/layout/layout';
import { PokemonCard } from '../components/card-section/PokemonCard';
import { TestPokemon } from './__mocks__/constants';
import Card from '../../pages/[pagination]/pokemons/[pokemon]';

test('render test', () => {
  const pokemon = TestPokemon;
  const pagination = '1';
  const props = { pokemon, pagination };
  render(
    <Layout>
      <PokemonCard cardSelected={TestPokemon} />
      <Card {...props} />
    </Layout>
  );

  act(() => {
    openDialog(<p>TestDialog</p>, DialogType.INFO);
    closeDialog();

    const linkElement = screen.getByText(/Close/i);

    expect(linkElement).toBeInTheDocument();
  });
});
