import { Component } from 'react';
import { PokemonData } from '../api/restApi';
import {
  bindSetPokemonCardState,
  setPokemonCardState,
} from '../../store/state';

type PokemonCardProps = {};

type PokemonState = {
  pokemon: PokemonData | null;
};

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
            <p>{pokemon.name}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
