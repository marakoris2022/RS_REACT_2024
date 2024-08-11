'use client';

import React from 'react';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../store/theme';
import style from './mainSection.module.scss';

type MainSectionProps = {
  children: ReactNode;
};

export const MainSection = ({ children }: MainSectionProps) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { themePicker } = themeContext;

  const appStyle = {
    color: themePicker.color,
    backgroundImage: themePicker.mainBackground,
  };

  return (
    <main style={appStyle} className={style.mainSection}>
      {children}
    </main>
  );
};
