import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PokemonCard } from '../components/card-section/PokemonCard';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PokemonCard />
      </Provider>
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId('close-card-back');
  expect(linkElement).toBeInTheDocument();
});
