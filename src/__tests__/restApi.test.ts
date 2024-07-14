import {
  getPokemonData,
  getPokemonDataByName,
  PokemonData,
  PokemonListData,
  searchPokemonListByName,
} from '../api/restApi';

const URL = 'https://pokeapi.co/api/v2/';

test('getPokemonDataByName test', async () => {
  let testName: string = '';

  const testData = await getPokemonDataByName('pikachu');

  testName = testData.name;

  expect(testName).toEqual('pikachu');
});

test('getPokemonData test', async () => {
  let testList: PokemonListData;

  testList = await getPokemonData('10', 10);

  expect(testList.count).toBeGreaterThan(0);
});

test('searchPokemonListByName test', async () => {
  let testList: PokemonData[];

  testList = await searchPokemonListByName('pika');

  expect(testList.length).toBeGreaterThan(0);
});
