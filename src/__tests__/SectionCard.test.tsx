import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestPokemon } from './__mock__';
import { SectionCard } from '../components/content-section/section-card/SectionCard';

test('render test', () => {
  render(
    <BrowserRouter>
      <SectionCard setCardSelected={() => {}} pokemon={TestPokemon} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/squirtle/i);
  expect(linkElement).toBeInTheDocument();
});

test('function test', () => {
  render(
    <BrowserRouter>
      <SectionCard setCardSelected={() => {}} pokemon={TestPokemon} />
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId(/cardWrapper/i);
  linkElement.click();
  expect(linkElement).toBeInTheDocument();
});
