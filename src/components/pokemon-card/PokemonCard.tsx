import { Component } from 'react';
import {
  bindSetPokemonCardState,
  PokemonState,
  setPokemonCardState,
} from '../../store/state';

type PokemonCardProps = {};

export class PokemonCard extends Component<PokemonCardProps, PokemonState> {
  constructor(props: PokemonCardProps) {
    super(props);

    this.state = {
      pokemon: null,
    };

    bindSetPokemonCardState(this.setState.bind(this));

    setPokemonCardState();
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div>
        {pokemon ? (
          <>
            <p>Name: {pokemon.name}</p>
            <p>{}</p>
            <img
              width={60}
              src={pokemon.sprites.front_default}
              alt="pokemon_img"
            />
            <p>Weight: {pokemon.weight}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
