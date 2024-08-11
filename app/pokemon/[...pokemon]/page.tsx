import React from 'react';
import { getPokemonDataByName } from '../../../src/api/restApi';
// import { themeSettings } from '../../../src/store/theme';
import { PokemonCard } from '../../../src/components/card-section/PokemonCard';
import style from './pokemon.module.scss';
import { cardPageThemeData } from './const';

interface Params {
  params: { pokemon: string[] };
}

const Card: React.FC<Params> = async ({ params }) => {
  const themeType = params.pokemon[0];
  const pokemonName = params.pokemon[1];

  const pokemonData = await getPokemonDataByName(pokemonName);

  const themePicker =
    themeType === 'light' ? cardPageThemeData.light : cardPageThemeData.dark;

  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <div style={appStyle} className={style.pageWrapper}>
      <div className="container">
        <div className={style.contentWrapper}>
          <PokemonCard cardSelected={pokemonData} />
        </div>
      </div>
    </div>
  );
};

export default Card;
