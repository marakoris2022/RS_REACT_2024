import { Component } from 'react';
import {
  bindSetPokemonListState,
  getPaginationSettings,
  setPokemonListState,
} from '../../store/state';

type PokemonListProps = {};

type PokemonListState = {
  pokemons:
    | {
        name: string;
        url: string;
      }[]
    | null;
};

export class PokemonList extends Component<PokemonListProps, PokemonListState> {
  constructor(props: PokemonListProps) {
    super(props);

    this.state = {
      pokemons: null,
    };

    bindSetPokemonListState(this.setState.bind(this));

    setPokemonListState(String(getPaginationSettings().offset));
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div>
        {pokemons ? (
          pokemons.map((pokemon) => {
            console.log('pokemon', pokemon);

            return (
              <div key={pokemon.name}>
                <p>{pokemon.name}</p>
                <p>{pokemon.url}</p>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
