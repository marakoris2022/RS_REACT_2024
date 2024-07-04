import './pokemonList.css';
import { Component } from 'react';
import {
  bindSetPokemonListState,
  getPaginationSettings,
  getSearchValue,
  PokemonListState,
  setPokemonListState,
  setSearchValue,
  setSearchValueState,
} from '../../store/state';
import { PokemonData } from '../../api/restApi';
import { firstLetterUppercase } from '../../utils/utils';
import { PokemonIcon } from '../pokemon-icon/PokemonIcon';
import { searchButtonClick } from '../search-button/SearchButton';

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

    function cardInListClicked(pokeName: string) {
      setSearchValue(pokeName);
      setSearchValueState(getSearchValue());
      searchButtonClick();
    }

    return (
      <div>
        {pokemons ? (
          pokemons.map((pokemon, index) => {
            return (
              <div
                className="card__wrapper"
                key={pokemon.name}
                onClick={() => cardInListClicked(pokemon.name)}
              >
                <p className="card__title">
                  {firstLetterUppercase(pokemon.name)}
                </p>
                <div className="icon__wrapper">
                  <PokemonIcon
                    width={30}
                    src={
                      additionalData
                        ? additionalData[index].sprites.front_default
                        : ''
                    }
                    alt={pokemon.name}
                  />
                </div>
                <p>
                  Type:
                  {additionalData
                    ? ` ${firstLetterUppercase(
                        additionalData[index].types[0].type.name
                      )}`
                    : ''}
                </p>
                <p>
                  Experience:{' '}
                  {additionalData ? additionalData[index].base_experience : ''}
                </p>
                <p>
                  Weight: {additionalData ? additionalData[index].weight : ''}
                </p>
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
