import { getBaseUrl, getPaginationSettings } from '../../store/state';

export const getPokemonData = async (offset: string) => {
  const { limit } = getPaginationSettings();

  const paginationUrl =
    getBaseUrl() + `pokemon?offset=${offset}&limit=${limit}`;

  const fetchData = await fetch(paginationUrl);
  return await fetchData.json();
};
