type State = {
  value: string;
};

type SetStateFunction = React.Dispatch<React.SetStateAction<State>>;

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

setSearchValue(getSearchValueFromLocalStorage());
