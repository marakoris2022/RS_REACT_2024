import { Component } from 'react';
import { PokemonData, getPokemonDataByName } from '../api/restApi';
import {
  bindSetPokemonCardState,
  getSearchValueFromLocalStorage,
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

    this.getPokemonData();

    bindSetPokemonCardState(this.setState.bind(this));
  }

  getPokemonData = async () => {
    const respond = await getPokemonDataByName(
      getSearchValueFromLocalStorage()
    );

    this.setState({ pokemon: respond });
  };

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
