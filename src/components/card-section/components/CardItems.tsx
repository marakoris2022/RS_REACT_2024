import { CardComponent } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import style from '../pokemonCard.module.scss';
import ItemsIco from '/items-ico.svg';

export const CardItems = ({ cardSelected }: CardComponent) => (
  <div style={{ width: '100%' }}>
    <h3 className={style.cardH3}>
      Items <img width={14} src={ItemsIco} alt="Items" /> :
    </h3>
    <ul className={style.cardUl}>
      {cardSelected.held_items.length > 0 ? (
        cardSelected.held_items.map((item) => (
          <li key={item.item.name} className={style.cardLi}>
            {firstLetterUppercase(item.item.name)}
          </li>
        ))
      ) : (
        <li className={style.cardLi}>Empty</li>
      )}
    </ul>
  </div>
);
