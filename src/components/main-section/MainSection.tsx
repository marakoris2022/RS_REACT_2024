import { ReactNode } from 'react';
import style from './mainSection.module.scss';
import { ThemeType } from 'src/store/theme';

type MainSectionProps = {
  children: ReactNode;
  theme: ThemeType;
};

export const MainSection = ({ children, theme }: MainSectionProps) => {
  return (
    <main
      style={{ backgroundImage: theme.mainBackground }}
      className={style.mainSection}
    >
      {children}
    </main>
  );
};
