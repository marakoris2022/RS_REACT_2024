import {
  getPokemonData,
  getPokemonDataByName,
  searchPokemonListByName,
} from '../api/restApi';

test('getPokemonDataByName test', async () => {
  let testName: string = '';

  const testData = await getPokemonDataByName('pikachu');

  testName = testData.name;

  expect(testName).toEqual('pikachu');
});

test('getPokemonData test', async () => {
  const testList = await getPokemonData('10', 10);

  expect(testList.count).toBeGreaterThan(0);
});

test('searchPokemonListByName test', async () => {
  const testList = await searchPokemonListByName('pika');

  expect(testList.length).toBeGreaterThan(0);
});
