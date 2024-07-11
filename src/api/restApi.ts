import { getBaseUrl, getPaginationSettings } from '../store/state';

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
  types: {
    type: {
      name: string;
    };
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

  return respond;
};

export const searchPokemonListByName = async (query: string) => {
  const allPokemonUrl = getBaseUrl() + `pokemon?limit=10000`;
  const fetchData = await fetch(allPokemonUrl);
  const respond: PokemonListData = await fetchData.json();

  const filteredPokemon = respond.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  const promiseArr: Promise<PokemonData>[] = [];

  for (let i = 0; i < filteredPokemon.length; i++) {
    promiseArr.push(getPokemonDataByName(filteredPokemon[i].name));
  }

  const pokemonDataList = await Promise.all(promiseArr);

  return pokemonDataList;
};
