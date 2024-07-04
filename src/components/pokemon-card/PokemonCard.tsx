import './pokemon-card.css';
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
          <div className="pokemon__card__wrapper">
            <p className="pokemon__card__title">
              {firstLetterUppercase(pokemon.name)}
            </p>
            <div className="icons__wrapper">
              <PokemonIcon
                width={120}
                src={pokemon.sprites.front_default}
                alt="pokemon_img"
              />
              <PokemonIcon
                width={120}
                src={pokemon.sprites.back_default}
                alt="pokemon_img"
              />
            </div>
            <p>Weight: {pokemon.weight}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
