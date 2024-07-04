import {
  PokemonData,
  getPokemonData,
  getPokemonDataByName,
} from '../components/api/restApi';

type State = {
  value: string;
};

type PokemonState = {
  pokemon: PokemonData | null;
};

export type PokemonListState = {
  pokemons:
    | {
        name: string;
        url: string;
      }[]
    | null;
  additionalData: PokemonData[] | null;
};

type SetStateFunction = React.Dispatch<React.SetStateAction<State>>;
type SetStatePokemonCard = React.Dispatch<React.SetStateAction<PokemonState>>;
type SetStatePokemonList = React.Dispatch<
  React.SetStateAction<PokemonListState>
>;

type _State = {
  url: string;
  search: {
    value: string;
    searchValueState: null | SetStateFunction;
  };
  contentSection: {
    setSectionState: null | SetStateFunction;
  };
  pagination: {
    settings: {
      offset: number;
      limit: number;
    };
    data: {
      count: number;
      nextPage: null;
      prevPage: null;
    };
  };
  setPokemonCardState: null | SetStatePokemonCard;
  setPokemonListState: null | SetStatePokemonList;
};

const _state: _State = {
  url: 'https://pokeapi.co/api/v2/',
  search: {
    value: '',
    searchValueState: null,
  },
  contentSection: {
    setSectionState: null,
  },
  pagination: {
    settings: {
      offset: 0,
      limit: 10,
    },
    data: {
      count: 0,
      nextPage: null,
      prevPage: null,
    },
  },
  setPokemonCardState: null,
  setPokemonListState: null,
};

export const getSearchValueFromLocalStorage = () => {
  const value = localStorage.getItem('searchValue');
  return value ?? '';
};

export const setSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem('searchValue', value);
};

export const getBaseUrl = () => {
  return _state.url;
};

export const getPaginationSettings = () => {
  return _state.pagination.settings;
};

export const setSearchValue = (searchValue: string) => {
  _state.search.value = searchValue;
};

export const getSearchValue = () => {
  return _state.search.value;
};

export const bindSearchValueState = (f: SetStateFunction) => {
  _state.search.searchValueState = f;
};

export const setSearchValueState = (value: string) => {
  if (_state.search.searchValueState) {
    _state.search.searchValueState((prevState) => ({ ...prevState, value }));
  }
};

export const bindSectionState = (f: SetStateFunction) => {
  _state.contentSection.setSectionState = f;
};

export const setSectionState = () => {
  if (_state.contentSection.setSectionState) {
    const newValue = getSearchValueFromLocalStorage();

    _state.contentSection.setSectionState((prevState) => ({
      ...prevState,
      value: newValue,
    }));
  }
};

export const bindSetPokemonCardState = (f: SetStatePokemonCard) => {
  _state.setPokemonCardState = f;
};

export const setPokemonCardState = async () => {
  if (_state.setPokemonCardState) {
    const respond = await getPokemonDataByName(
      getSearchValueFromLocalStorage()
    );

    _state.setPokemonCardState({ pokemon: respond });
  }
};

export const bindSetPokemonListState = (f: SetStatePokemonList) => {
  _state.setPokemonListState = f;
};

export const setPokemonListState = async (offset: string) => {
  if (_state.setPokemonListState) {
    const respond = await getPokemonData(offset);
    let additionalDataUrlArray = respond.results.map((data) => {
      return data.url;
    });

    const promiseArr: Promise<PokemonData>[] = [];

    for (let i = 0; i < additionalDataUrlArray.length; i++) {
      promiseArr.push(getPokemonDataByName(respond.results[i].name));
    }

    let additionalDataRespond = await Promise.all(promiseArr);

    _state.setPokemonListState({
      pokemons: respond.results,
      additionalData: additionalDataRespond,
    });
  }
};

setSearchValue(getSearchValueFromLocalStorage());
