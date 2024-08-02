import { useContext } from 'react';
import style from './searchFailed.module.scss';
import { ThemeContext } from '../../../store/theme';

export const SearchFailed = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme } = themeContext;

  return (
    <div
      style={{ background: theme.cardBackground, border: theme.cardBorder }}
      className={style.wrapper}
    >
      <p className={style.text}>No Pokes with this Search request...</p>
    </div>
  );
};
