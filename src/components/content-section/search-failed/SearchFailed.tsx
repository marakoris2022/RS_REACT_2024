import { useContext } from 'react';
import style from './searchFailed.module.scss';
import { ThemeContext } from '../../../store/theme';

export const SearchFailed = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ background: theme.cardBackground, border: theme.cardBorder }}
      className={style.wrapper}
    >
      <p className={style.text}>No Pokes with this Search request...</p>
    </div>
  );
};
