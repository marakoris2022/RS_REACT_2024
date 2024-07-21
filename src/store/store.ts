import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { searchPokemonListByName } from '../api/restApi';
import { PokemonData } from '../interface/interface';

type AsyncThunkConfig = {};
enum FetchingDataStatus {
  FETCHING = 'Fetching',
  READY = 'Ready',
  IDLE = 'Idle',
  ERROR = 'Error',
}

export const fetchPokemonData = createAsyncThunk<
  PokemonData[],
  string,
  AsyncThunkConfig
>('pokeList/fetchPokemonData', async (name: string) => {
  return await searchPokemonListByName(name);
});

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
  initialState: {
    pokemonDataList: [] as PokemonData[],
    chosenPokes: [] as PokemonData[],
    type: FetchingDataStatus.IDLE,
  },
  reducers: {
    addPoke: (state, action) => {
      if (
        !state.chosenPokes.find((poke) => poke.name === action.payload.name)
      ) {
        state.chosenPokes.push(action.payload);
      }
    },
    removePoke: (state, action) => {
      state.chosenPokes = state.chosenPokes.filter(
        (poke) => poke.name !== action.payload.name
      );
    },
    clearPokes: (state) => {
      state.chosenPokes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.pokemonDataList = [];
        state.type = FetchingDataStatus.FETCHING;
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.pokemonDataList = action.payload;
        state.type = FetchingDataStatus.READY;
      })
      .addCase(fetchPokemonData.rejected, (state) => {
        state.type = FetchingDataStatus.ERROR;
      });
  },
});

const pokemonCardSlice = createSlice({
  name: 'pokeCard',
  initialState: {
    pokemonCard: null as PokemonData | null,
  },
  reducers: {
    setPokemonCard: (state, action) => {
      state.pokemonCard = action.payload;
    },
  },
});

export const { setSearchValue } = coreSlice.actions;
export const { addPoke, removePoke, clearPokes } = pokemonListSlice.actions;
export const { setPokemonCard } = pokemonCardSlice.actions;

export const store = configureStore({
  reducer: {
    core: coreSlice.reducer,
    pokeList: pokemonListSlice.reducer,
    pokeCard: pokemonCardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
