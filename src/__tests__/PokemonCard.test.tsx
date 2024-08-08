import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PokemonCard } from '../components/card-section/PokemonCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '../store/store';
import { TestPokemon } from './__mocks__/constants';

enum FetchingDataStatus {
  READY = 'Ready',
}

// Mock the initial state if necessary
const mockStore = configureStore([]);
const initialState: RootState = {
  pokeCard: { pokemonCard: TestPokemon },
  core: {
    searchValue: '',
  },
  pokeList: {
    pokemonDataList: [TestPokemon, TestPokemon],
    chosenPokes: [TestPokemon, TestPokemon],
    type: FetchingDataStatus.READY,
  },
};

const store = mockStore(initialState);

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
