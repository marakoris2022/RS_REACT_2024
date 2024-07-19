import style from '../pokemonCard.module.scss';
import AbilIco from '/abil-ico.svg';
import { CardComponent } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';

export const CardAbilities = ({ cardSelected }: CardComponent) => (
  <div style={{ width: '100%' }}>
    <h3 className={style.cardH3}>
      Abilities <img width={14} src={AbilIco} alt="Abil" /> :
    </h3>
    <ul className={style.cardUl}>
      {cardSelected.abilities.length > 0 ? (
        cardSelected.abilities.map((abil) => (
          <li key={abil.ability.name} className={style.cardLi}>
            {firstLetterUppercase(abil.ability.name)}
          </li>
        ))
      ) : (
        <li className={style.cardLi}>No any Abilities.</li>
      )}
    </ul>
  </div>
);
