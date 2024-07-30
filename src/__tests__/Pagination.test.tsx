import { render, screen, act } from '@testing-library/react';
import { Pagination } from '../components/pagination/Pagination';
import { BrowserRouter } from 'react-router-dom';
import { TestPokemon } from './__mock__';
import { useState } from 'react';
import { PokemonData } from '../interface/interface';

const pokemonMockList: PokemonData[] = Array.from(
  { length: 100 },
  () => TestPokemon
);

function TestComponent() {
  const [pageNum, setPageNum] = useState(1);

  return (
    <Pagination
      pageNum={pageNum}
      setPageNum={setPageNum}
      pokemonListLength={pokemonMockList.length}
    />
  );
}

test('render test', () => {
  render(
    <BrowserRouter>
      <TestComponent />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Pokes found/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/100/i);
  expect(linkElement2).toBeInTheDocument();
});

test('handlePageClick function is called correctly', async () => {
  // Render the Pagination component
  render(
    <BrowserRouter>
      <TestComponent />
    </BrowserRouter>
  );

  // Find and click the 'Next' and 'Prev' buttons
  const nextButton = screen.getByText(/Next/i);
  const prevButton = screen.getByText(/Prev/i);

  // Use act to wrap the state updates
  act(() => {
    nextButton.click();
    prevButton.click();
  });

  const pageInfoContainer = screen.getByText(/2 \/ 10/i);
  expect(pageInfoContainer).toBeInTheDocument();
});
