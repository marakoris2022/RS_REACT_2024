import { ThemeType } from 'src/store/theme';
import style from './theme-toggle.module.scss';
import { useNavigate } from '@remix-run/react';

export const ThemeToggle = ({ theme }: { theme: ThemeType }) => {
  let navigate = useNavigate();

  function handleChange() {
    if (theme.theme === 'Light') {
      navigate(`/dark/1/empty`);
    }
    navigate(`/light/1/empty`);
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
