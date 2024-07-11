import './pokemon-card.css';
import { Component } from 'react';
import {
  bindSetPokemonCardState,
  PokemonState,
  setPokemonCardState,
} from '../../store/state';
import { firstLetterUppercase } from '../../utils/utils';
import { PokemonIcon } from '../pokemon-icon/PokemonIcon';
import ExpIco from '/exp-ico.svg';
import AbilIco from '/abil-ico.svg';
import ItemsIco from '/items-ico.svg';
import SpecialIco from '/special-ico.svg';
import StatsIco from '/stats-ico.svg';
import { Loading } from '../loading/Loading';

type PokemonCardProps = Record<string, never>;

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

            <p>
              Experience: {pokemon.base_experience}{' '}
              <img width={12} src={ExpIco} alt="Exp" />
            </p>

            <h3 className="card__h3">
              Stats <img width={14} src={StatsIco} alt="Stats" /> :
            </h3>
            <ul className="card__ul">
              {pokemon.stats.length > 0 ? (
                pokemon.stats.map((stat) => {
                  return (
                    <li
                      key={stat.stat.name}
                      className="card__li"
                    >{`${firstLetterUppercase(stat.stat.name)}: ${stat.base_stat}`}</li>
                  );
                })
              ) : (
                <li className="card__li">Empty</li>
              )}
            </ul>

            <div className="abil-items-wrapper">
              <div style={{ width: '100%' }}>
                <h3 className="card__h3">
                  Abilities <img width={14} src={AbilIco} alt="Abil" /> :
                </h3>
                <ul className="card__ul">
                  {pokemon.abilities.length > 0 ? (
                    pokemon.abilities.map((abil) => {
                      return (
                        <li key={abil.ability.name} className="card__li">
                          {firstLetterUppercase(abil.ability.name)}
                        </li>
                      );
                    })
                  ) : (
                    <li className="card__li">No any Abilities.</li>
                  )}
                </ul>
              </div>

              <div style={{ width: '100%' }}>
                <h3 className="card__h3">
                  Items <img width={14} src={ItemsIco} alt="Items" /> :
                </h3>
                <ul className="card__ul">
                  {pokemon.held_items.length > 0 ? (
                    pokemon.held_items.map((item) => {
                      return (
                        <li key={item.item.name} className="card__li">
                          {firstLetterUppercase(item.item.name)}
                        </li>
                      );
                    })
                  ) : (
                    <li className="card__li">Empty</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="spec-moves__wrapper">
              <h3 className="card__h3">
                Special Moves <img width={14} src={SpecialIco} alt="Special" />{' '}
                :
              </h3>
              <ul className="card__ul">
                {pokemon.moves.length > 0 ? (
                  pokemon.moves.map((move) => {
                    return (
                      <li key={move.move.name} className="card__li">
                        {firstLetterUppercase(move.move.name)}
                      </li>
                    );
                  })
                ) : (
                  <li className="card__li">Empty</li>
                )}
              </ul>
            </div>

            <div className="body_charat_wrapper">
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
