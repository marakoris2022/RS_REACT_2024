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

export const searchPokemonListByName = async (query: string) => {
  const allPokemonUrl = URL + `pokemon?limit=10000`;
  const fetchData = await fetch(allPokemonUrl);
  const respond: PokemonListData = await fetchData.json();

  let promiseArr: Promise<PokemonData>[] = [];

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
