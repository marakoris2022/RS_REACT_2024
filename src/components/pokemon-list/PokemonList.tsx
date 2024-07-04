import { Component } from 'react';
import {
  bindSetPokemonListState,
  getPaginationSettings,
  PokemonListState,
  setPokemonListState,
} from '../../store/state';
import { PokemonData } from '../api/restApi';

type PokemonListProps = {};

export class PokemonList extends Component<
  PokemonListProps,
  PokemonListState,
  PokemonData
> {
  constructor(props: PokemonListProps) {
    super(props);

    this.state = {
      pokemons: null,
      additionalData: null,
    };

    bindSetPokemonListState(this.setState.bind(this));

    setPokemonListState(String(getPaginationSettings().offset));
  }

  render() {
    const { pokemons, additionalData } = this.state;

    return (
      <div>
        {pokemons ? (
          pokemons.map((pokemon, index) => {
            return (
              <div key={pokemon.name}>
                <p>{pokemon.name}</p>
                <p>{additionalData ? additionalData[index].weight : ''}</p>
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
