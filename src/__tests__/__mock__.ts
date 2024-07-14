import { PokemonData } from '../interface/interface';

export const TestPokemon: PokemonData = {
  abilities: [
    { ability: { name: 'torrent' } },
    { ability: { name: 'rain-dish' } },
  ],
  base_experience: 63,
  held_items: [{ item: { name: 'poke-ball' } }],
  moves: [{ move: { name: 'tackle' } }, { move: { name: 'water-gun' } }],
  name: 'squirtle',
  weight: 90,
  height: 5,
  sprites: {
    front_default: 'https://pokeapi.co/media/sprites/squirtle-front.png',
    back_default: 'https://pokeapi.co/media/sprites/squirtle-back.png',
  },
  stats: [
    { stat: { name: 'hp' }, base_stat: 44 },
    { stat: { name: 'attack' }, base_stat: 48 },
    { stat: { name: 'defense' }, base_stat: 65 },
    { stat: { name: 'special-attack' }, base_stat: 50 },
    { stat: { name: 'special-defense' }, base_stat: 64 },
    { stat: { name: 'speed' }, base_stat: 43 },
  ],
  types: [{ type: { name: 'water' } }],
};
