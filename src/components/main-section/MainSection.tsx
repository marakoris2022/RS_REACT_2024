import { ReactNode } from 'react';
import style from './mainSection.module.scss';
import React from 'react';

type MainSectionProps = {
  children: ReactNode;
};

export const MainSection = ({ children }: MainSectionProps) => {
  return <section className={style.mainSection}>{children}</section>;
};
