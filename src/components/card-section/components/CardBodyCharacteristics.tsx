import { CardComponent } from '../../../interface/interface';
import React from 'react';

import style from '../pokemonCard.module.scss';

export const CardBodyCharacteristics = ({ cardSelected }: CardComponent) => (
  <div className={style.bodyCharatWrapper}>
    <p>Height: {cardSelected.height}</p>
    <p>Weight: {cardSelected.weight}</p>
  </div>
);
