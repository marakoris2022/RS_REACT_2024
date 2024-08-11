import { useContext } from 'react';
import { ThemeContext } from '../../store/theme';
import style from './theme-toggle.module.scss';

export const ThemeToggle = () => {
  const theme = useContext(ThemeContext);

  function handleChange() {}

  return (
    <button
      style={{ background: theme.toggleBackground, color: theme.color }}
      className={style.toggleButton}
      onClick={handleChange}
    >
      {theme.theme}
      {theme.themeIcon}
    </button>
  );
};
