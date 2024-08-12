import { PokemonData, PokemonListData } from '../interface/interface';

const URL = 'https://pokeapi.co/api/v2/';

export const getPokemonData = async (offset: string, limit: number) => {
  const paginationUrl = URL + `pokemon?offset=${offset}&limit=${limit}`;

  const fetchData = await fetch(paginationUrl);
  const respond: PokemonListData = await fetchData.json();

  return respond;
};

export const getPokemonDataByName = async (name: string) => {
  const paginationUrl = URL + `pokemon/${name}`;

  const fetchData = await fetch(paginationUrl);
  const respond: PokemonData = await fetchData.json();

  return respond;
};

export const searchPokemonListByNameWithData = async (query: string) => {
  const allPokemonUrl = URL + `pokemon?limit=${query.length < 2 ? 100 : 10000}`;
  const fetchData = await fetch(allPokemonUrl);
  const respond: PokemonListData = await fetchData.json();

  const promiseArr: Promise<PokemonData>[] = [];

  if (query) {
    const filteredPokemon = respond.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    for (let i = 0; i < filteredPokemon.length; i++) {
      promiseArr.push(getPokemonDataByName(filteredPokemon[i].name));
    }
  } else {
    for (let i = 0; i < respond.results.length; i++) {
      promiseArr.push(getPokemonDataByName(respond.results[i].name));
    }
  }

  const settledRespond = await Promise.allSettled(promiseArr);

  const pokemonDataList = settledRespond
    .filter((res) => res.status === 'fulfilled')
    .map((res) => res.value);

  return pokemonDataList;
};

export const searchPokemonListByName = async (query: string) => {
  const allPokemonUrl = URL + `pokemon?limit=10000`;
  const fetchData = await fetch(allPokemonUrl);
  const respond: PokemonListData = await fetchData.json();

  if (query) {
    const filteredRespondResults = respond.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    return {
      count: filteredRespondResults.length,
      next: null,
      previous: null,
      results: filteredRespondResults,
    };
  }

  return respond;
};

export const getPokemonDataByNames = async (
  data: {
    name: string;
    url: string;
  }[]
) => {
  const promiseArr: Promise<PokemonData>[] = [];

  for (let i = 0; i < data.length; i++) {
    promiseArr.push(getPokemonDataByName(data[i].name));
  }

  const settledRespond = await Promise.allSettled(promiseArr);

  const pokemonDataList = settledRespond
    .filter((res) => res.status === 'fulfilled')
    .map((res) => res.value);

  return pokemonDataList;
};
