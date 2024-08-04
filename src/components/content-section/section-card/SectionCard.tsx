import { useContext, useEffect, useState } from 'react';
import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';
import { CardCheckbox } from './card-checkbox/CardCheckbox';
import { ThemeContext } from '../../../store/theme';
import { getPokemonDataByName } from '../../../api/restApi';
import { PokemonData } from '../../../interface/interface';
import RunningPokemon from '../../../../public/pikachu-running.gif';
import Image from 'next/image';
type SectionCardProps = {
  pokemonName: string;
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const SectionCard = ({ pokemonName }: SectionCardProps) => {
  const themeContext = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  function handleClick() {
    scrollToTop();
  }

  useEffect(() => {
    async function getPokemonData() {
      const pokemonData = await getPokemonDataByName(pokemonName);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, [pokemonName]);

  if (!pokemon)
    return (
      <div
        style={{ background: theme.cardBackground, border: theme.cardBorder }}
        data-testid="cardWrapper"
        className={style.cardWrapper}
        onClick={handleClick}
      >
        <div
          style={{
            height: '150px',
            width: '300px',
            fontSize: '30px',
            textAlign: 'center',
          }}
        >
          <p>Loading...</p>
          <Image width={60} height={60} src={RunningPokemon.src} alt="poke" />
        </div>
      </div>
    );

  return (
    <div
      style={{ background: theme.cardBackground, border: theme.cardBorder }}
      data-testid="cardWrapper"
      className={style.cardWrapper}
      onClick={handleClick}
    >
      <div className={style.titleWrapper}>
        <h2 className={style.cardTitle}>
          {firstLetterUppercase(pokemon.name)}
        </h2>
        <div
          style={{ background: theme.iconBackground }}
          className={style.iconWrapper}
        >
          <PokemonIcon
            width={100}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className={style.contentWrapper}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.checkboxWrapper}
        >
          <CardCheckbox pokemon={pokemon} />
        </div>

        <div>
          <span className={style.contentTitle}>Type:</span>
          {firstLetterUppercase(pokemon.types[0].type.name)}
        </div>
        <div>
          <span className={style.contentTitle}>Experience:</span>
          {pokemon.base_experience}
        </div>
        <div>
          <span className={style.contentTitle}>Weight:</span>
          {pokemon.weight}
        </div>
      </div>
    </div>
  );
};
