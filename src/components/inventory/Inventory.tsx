import { useContext, useState } from 'react';
import style from './inventory.module.scss';
import { Button } from '../button/Button';
import { ButtonType } from '../../interface/interface';
import { AppDispatch, clearPokes, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { DownloadButton } from './download-button/DownloadButton';
import { ThemeContext } from '../../store/theme';
import { useGlobalState } from '../../store/GlobalStateContext';

export const Inventory = () => {
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  // const dispatch: AppDispatch = useDispatch();
  // const chosenPokes = useSelector(
  //   (state: RootState) => state.pokeList.chosenPokes
  // );

  const { state, setState } = useGlobalState();

  function handleClick() {
    setIsButtonsActive((state) => !state);
  }

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;
  return (
    <div
      className={`${style.backgroundWrapper} ${state.chosenPokes.length < 1 && style.hidden}`}
    >
      <div
        onClick={handleClick}
        className={`${style.inventoryWrapper} ${isButtonsActive && style.active}`}
      >
        <div
          style={{ backgroundColor: theme.menuBackground }}
          className={`${style.buttonsWrapper} ${isButtonsActive && style.active}`}
        >
          <DownloadButton />
          <Button
            title="Clear"
            btnType={ButtonType.RED}
            onClick={() => {
              setState((state) => {
                return {
                  ...state,
                  chosenPokes: [],
                };
              });
            }}
          />
        </div>
        <div className={style.counterWrapper}>
          <span style={{ color: 'black' }} className={style.counter}>
            {state.chosenPokes.length}
          </span>
        </div>
      </div>
    </div>
  );
};
