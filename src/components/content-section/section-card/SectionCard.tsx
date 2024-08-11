'use client';

import { useContext, useEffect, useState } from 'react';
import { firstLetterUppercase } from '../../../utils/utils';
import { PokemonIcon } from '../../pokemon-icon/PokemonIcon';
import style from './sectionCard.module.scss';
import { CardCheckbox } from './card-checkbox/CardCheckbox';
import { ThemeContext } from '../../../store/theme';
import { getPokemonDataByName } from '../../../api/restApi';
import { PokemonData } from '../../../interface/interface';
import { SkeletonSectionCard } from './skeleton-section-card/SkeletonSectionCard';
import { useGlobalState } from '../../../store/GlobalStateContext';
import React from 'react';
import { useRouter } from 'next/navigation';

type SectionCardProps = {
  pokemonName: string;
};

export const SectionCard = ({ pokemonName }: SectionCardProps) => {
  const themeContext = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const route = useRouter();

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  function handleClick() {
    route.push(`/pokemon/${theme.theme.toLocaleLowerCase()}/${pokemon?.name}`);
  }

  useEffect(() => {
    async function getPokemonData() {
      const pokemonData = await getPokemonDataByName(pokemonName);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, [pokemonName]);

  if (!pokemon) return <SkeletonSectionCard theme={theme} />;

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
            height={100}
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
