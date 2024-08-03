import { useState } from 'react';
import { ThemeContext, themeSettings } from '../../store/theme';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Dialog } from '../dialog/Dialog';
import { Inventory } from '../inventory/Inventory';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ themePicker, toggleIsLightTheme }}>
        <Dialog />
        <Inventory />
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
};

export default Layout;
