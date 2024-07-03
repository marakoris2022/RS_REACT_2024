import { getBaseUrl, getPaginationSettings } from '../../store/state';

export type PokemonData = {
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export type PokemonListData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    pokemonUrl: string;
  }[];
};

export const getPokemonData = async (offset: string) => {
  const { limit } = getPaginationSettings();

  const paginationUrl =
    getBaseUrl() + `pokemon?offset=${offset}&limit=${limit}`;

  const fetchData = await fetch(paginationUrl);
  const respond: PokemonListData = await fetchData.json();
  return respond;
};

export const getPokemonDataByName = async (name: string) => {
  const paginationUrl = getBaseUrl() + `pokemon/${name}`;

  const fetchData = await fetch(paginationUrl);
  const respond: PokemonData = await fetchData.json();
  return respond;
};
