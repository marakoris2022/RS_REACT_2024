import { useContext } from 'react';
import { ThemeContext } from '../../store/theme';
import style from './theme-toggle.module.scss';

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker: theme, toggleIsLightTheme } = themeContext;

  function handleChange() {
    toggleIsLightTheme((state) => !state);
  }

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
