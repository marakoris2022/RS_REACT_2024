import { useState } from 'react';
import { ThemeContext, themeSettings } from '../../store/theme';
import { Dialog } from '../dialog/Dialog';
import { Inventory } from '../inventory/Inventory';
import { GlobalStateProvider } from '../../store/GlobalStateContext';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;
  return (
    <GlobalStateProvider>
      <ThemeContext.Provider value={{ themePicker, toggleIsLightTheme }}>
        <Dialog />
        <Inventory />
        {children}
      </ThemeContext.Provider>
    </GlobalStateProvider>
  );
};

export default Layout;
