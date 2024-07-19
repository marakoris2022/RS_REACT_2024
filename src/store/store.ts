import { configureStore, createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const pokemonListSlice = createSlice({
  name: 'pokeList',
  initialState: {},
  reducers: {},
});

const pokemonCardSlice = createSlice({
  name: 'pokeCard',
  initialState: {},
  reducers: {},
});

export const { setSearchValue } = coreSlice.actions;
export const {} = pokemonListSlice.actions;
export const {} = pokemonCardSlice.actions;

export const store = configureStore({
  reducer: {
    core: coreSlice.reducer,
    pokeList: pokemonListSlice.reducer,
    pokeCard: pokemonListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
