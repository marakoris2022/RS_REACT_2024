import { Component } from 'react';
import {
  bindSetPokemonListState,
  getPaginationSettings,
  setPokemonListState,
} from '../../store/state';
import { PokemonData } from '../api/restApi';

type PokemonListProps = {};

type PokemonListState = {
  pokemons: PokemonData[] | null;
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
            return (
              <div key={pokemon.name}>
                <p>{pokemon.name}</p>
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
