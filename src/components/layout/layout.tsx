import { useState } from 'react';
import { ThemeContext, themeSettings } from '../../store/theme';
import { Dialog } from '../dialog/Dialog';
import { Inventory } from '../inventory/Inventory';
import { GlobalStateProvider } from '../../store/GlobalStateContext';
import React from 'react';
import { ErrorBoundary } from '../error-boundarie/ErrorBoundarie';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;
  return (
    <ErrorBoundary>
      <GlobalStateProvider>
        <ThemeContext.Provider value={{ themePicker, toggleIsLightTheme }}>
          <Dialog />
          <Inventory />
          {children}
        </ThemeContext.Provider>
      </GlobalStateProvider>
    </ErrorBoundary>
  );
};

export default Layout;
