import { CardComponent } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import SpecialIco from '/special-ico.svg';

import style from '../pokemonCard.module.scss';

export const CardSpecialMoves = ({ cardSelected }: CardComponent) => (
  <div className={style.specMovesWrapper}>
    <h3 className={style.cardH3}>
      Special Moves <img width={14} src={SpecialIco} alt="Special" /> :
    </h3>
    <ul className={style.cardUl}>
      {cardSelected.moves.length > 0 ? (
        cardSelected.moves.map((move) => (
          <li key={move.move.name} className={style.cardLi}>
            {firstLetterUppercase(move.move.name)}
          </li>
        ))
      ) : (
        <li className={style.cardLi}>Empty</li>
      )}
    </ul>
  </div>
);
