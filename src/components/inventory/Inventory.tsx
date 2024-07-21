import { useState } from 'react';
import style from './inventory.module.scss';
import { Button } from '../button/Button';
import { ButtonType } from '../../interface/interface';
import { AppDispatch, clearPokes, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

export const Inventory = () => {
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const chosenPokes = useSelector(
    (state: RootState) => state.pokeList.chosenPokes
  );

  function handleClick() {
    setIsButtonsActive((state) => !state);
  }

  return (
    <div
      onClick={handleClick}
      className={`${style.inventoryWrapper} ${isButtonsActive && style.active} ${chosenPokes.length < 1 && style.hidden}`}
    >
      <div
        className={`${style.buttonsWrapper} ${isButtonsActive && style.active}`}
      >
        <Button
          title="Download"
          btnType={ButtonType.GREEN}
          onClick={() => {}}
        />
        <Button
          title="Clear"
          btnType={ButtonType.RED}
          onClick={() => {
            dispatch(clearPokes());
          }}
        />
      </div>
      <div className={style.counterWrapper}>
        <span className={style.counter}>{chosenPokes.length}</span>
      </div>
    </div>
  );
};
