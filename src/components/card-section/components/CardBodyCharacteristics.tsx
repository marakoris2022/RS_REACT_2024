import { CardComponent } from '../../../interface/interface';

import style from '../pokemonCard.module.scss';

export const CardBodyCharacteristics = ({ cardSelected }: CardComponent) => (
  <div className={style.bodyCharatWrapper}>
    <p>Height: {cardSelected.height}</p>
    <p>Weight: {cardSelected.weight}</p>
  </div>
);
