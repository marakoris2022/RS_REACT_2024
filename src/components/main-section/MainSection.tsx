import { ReactNode } from 'react';
import style from './mainSection.module.scss';

type MainSectionProps = {
  children: ReactNode;
};

export const MainSection = ({ children }: MainSectionProps) => {
  return <main className={style.mainSection}>{children}</main>;
};
