import { ButtonType, CardWrapper } from '../../../interface/interface';
import { firstLetterUppercase } from '../../../utils/utils';
import { Button } from '../../button/Button';
import style from '../pokemonCard.module.scss';

export const CardHeader = ({
  cardSelected,
  handleClick,
  children,
}: CardWrapper) => (
  <div className={style.wrapper}>
    <Button
      id="close-card-btn"
      title="X"
      onClick={handleClick}
      btnType={ButtonType.RED}
    />
    <div className={style.pokemonCardWrapper}>
      <p className={style.pokemonCardTitle}>
        {firstLetterUppercase(cardSelected.name)}
      </p>
      {children}
    </div>
  </div>
);
