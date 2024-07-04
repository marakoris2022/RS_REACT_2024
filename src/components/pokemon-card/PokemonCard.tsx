import { Component } from 'react';
import {
  bindSetPokemonCardState,
  PokemonState,
  setPokemonCardState,
} from '../../store/state';
import { firstLetterUppercase } from '../../utils/utils';
import { PokemonIcon } from '../pokemon-icon/PokemonIcon';

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
            <p>Name: {firstLetterUppercase(pokemon.name)}</p>
            <PokemonIcon
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
