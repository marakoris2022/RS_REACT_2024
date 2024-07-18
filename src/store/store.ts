import { configureStore, createSlice } from '@reduxjs/toolkit';

const pokemonListSlice = createSlice({
  name: 'pokeList',
  initialState: {
    value: [],
  },
  reducers: {},
});
const pokemonCardSlice = createSlice({
  name: 'pokeCard',
  initialState: {
    value: [],
  },
  reducers: {},
});

export const {} = pokemonListSlice.actions;
export const {} = pokemonCardSlice.actions;

export const store = configureStore({
  reducer: {
    pokeList: pokemonListSlice.reducer,
    pokeCard: pokemonListSlice.reducer,
  },
});
