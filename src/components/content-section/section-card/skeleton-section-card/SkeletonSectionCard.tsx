import Image from 'next/image';
import RunningPokemon from '../../../../../public/pikachu-running.gif';
import style from './skeletonSectionCard.module.scss';
import React from 'react';

type SkeletonSectionCardType = {
  theme: {
    theme: string;
    color: string;
    themeIcon: string;
    mainBackground: string;
    menuBackground: string;
    searchWrapperBackground: string;
    cardBackground: string;
    cardBackgroundHover: string;
    cardBorder: string;
    iconBackground: string;
    toggleBackground: string;
  };
};

export const SkeletonSectionCard = ({ theme }: SkeletonSectionCardType) => {
  return (
    <div
      style={{ background: theme.cardBackground, border: theme.cardBorder }}
      data-testid="cardWrapper"
      className={style.cardWrapper}
    >
      <div className={style.contentWrapper}>
        <p>Loading...</p>
        <Image width={60} height={60} src={RunningPokemon.src} alt="poke" />
      </div>
    </div>
  );
};
