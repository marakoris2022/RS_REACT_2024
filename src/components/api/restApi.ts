import { getBaseUrl, getPaginationSettings } from '../../store/state';

export type PokemonData = {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  held_items: {
    item: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
  type: {
    name: string;
  }[];
};

export type PokemonListData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
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
  console.log(respond);

  return respond;
};
