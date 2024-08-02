import '../styles/globals.css'; // Import global styles

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ThemeContext, themeSettings } from '../src/store/theme';
import { useState } from 'react';
import { Dialog } from '../src/components/dialog/Dialog';
import { Inventory } from '../src/components/inventory/Inventory';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  const themePicker = isLightTheme ? themeSettings.light : themeSettings.dark;

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ themePicker, toggleIsLightTheme }}>
        <Dialog />
        <Inventory />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default MyApp;
