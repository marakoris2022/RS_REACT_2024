import { ThemeType } from 'src/store/theme';
import style from './searchFailed.module.scss';

export const SearchFailed = ({ theme }: { theme: ThemeType }) => {
  return (
    <div
      style={{ background: theme.cardBackground, border: theme.cardBorder }}
      className={style.wrapper}
    >
      <p className={style.text}>No Pokes with this Search request...</p>
    </div>
  );
};
