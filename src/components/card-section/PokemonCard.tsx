import style from './pokemonCard.module.scss';
import { CardHeader } from './components/CardHeader';
import { CardIcons } from './components/CardIcons';
import { CardStats } from './components/CardStats';
import { CardAbilities } from './components/CardAbilities';
import { CardItems } from './components/CardItems';
import { CardSpecialMoves } from './components/CardSpecialMoves';
import { CardBodyCharacteristics } from './components/CardBodyCharacteristics';
import { PokemonData } from '../../interface/interface';
import { useRouter } from 'next/router';
import React from 'react';

type PokemonCardType = {
  cardSelected: PokemonData;
};

export const PokemonCard = ({ cardSelected }: PokemonCardType) => {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }

  return (
    <section className={style.sectionWrapper}>
      {cardSelected ? (
        <CardHeader cardSelected={cardSelected} handleClick={handleClick}>
          <>
            <CardIcons cardSelected={cardSelected} />
            <CardStats cardSelected={cardSelected} />
            <div className={style.abilItemsWrapper}>
              <CardAbilities cardSelected={cardSelected} />
              <CardItems cardSelected={cardSelected} />
            </div>
            <CardSpecialMoves cardSelected={cardSelected} />
            <CardBodyCharacteristics cardSelected={cardSelected} />
          </>
        </CardHeader>
      ) : null}
    </section>
  );
};
