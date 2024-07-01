export const _state = {
  url: 'https://pokeapi.co/api/v2/',
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

export const getBaseUrl = () => {
  return _state.url;
};

export const getPaginationSettings = () => {
  return _state.pagination.settings;
};
