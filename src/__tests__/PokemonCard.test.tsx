import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PokemonCard } from '../components/card-section/PokemonCard';
import { TestPokemon } from './__mock__';

test('render test', () => {
  render(
    <BrowserRouter>
      <PokemonCard cardSelected={TestPokemon} setCardSelected={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/squirtle/i);
  expect(linkElement).toBeInTheDocument();
});
