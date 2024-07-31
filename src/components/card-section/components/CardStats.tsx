import { CardComponent } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import style from '../pokemonCard.module.scss';
import ExpIco from '../../../../public/exp-ico.svg';
import StatsIco from '../../../../public/stats-ico.svg';

export const CardStats = ({ cardSelected }: CardComponent) => (
  <div>
    <p>
      Experience: {cardSelected.base_experience}{' '}
      <img width={12} src={ExpIco.src} alt="Exp" />
    </p>
    <h3 className={style.cardH3}>
      Stats <img width={14} src={StatsIco.src} alt="Stats" /> :
    </h3>
    <ul className={style.cardUl}>
      {cardSelected.stats.length > 0 ? (
        cardSelected.stats.map((stat) => (
          <li key={stat.stat.name} className={style.cardLi}>
            <div className={style.statItemWrapper}>
              <div
                className={
                  stat.stat.name === 'hp' ? style.statNameHp : style.statName
                }
              >
                {firstLetterUppercase(stat.stat.name)}
              </div>
              <div
                className={
                  stat.stat.name === 'hp' ? style.statValueHp : style.statValue
                }
              >
                {stat.stat.name === 'hp'
                  ? `${stat.base_stat} / ${stat.base_stat}`
                  : stat.base_stat}
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className={style.cardLi}>Empty</li>
      )}
    </ul>
  </div>
);
