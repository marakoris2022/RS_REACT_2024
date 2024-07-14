import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestPokemon } from './__mock__';
import { SectionCard } from '../components/content-section/section-card/SectionCard';
import { ContentSection } from '../components/content-section/ContentSection';

test('render test', () => {
  render(
    <BrowserRouter>
      <ContentSection cardSelected={TestPokemon} setCardSelected={() => {}} />
      <SectionCard setCardSelected={() => {}} pokemon={TestPokemon} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/squirtle/i);
  expect(linkElement).toBeInTheDocument();
});
