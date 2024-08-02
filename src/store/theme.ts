import { createContext, SetStateAction, Dispatch } from 'react';

export const themeSettings = {
  light: {
    theme: 'Light',
    color: 'black',
    themeIcon: '🔆',
    mainBackground: 'url(/back.jpg)',
    menuBackground: 'rgba(4, 78, 0, 0.8)',
    searchWrapperBackground: 'rgba(0, 128, 0, 0.6)',
    cardBackground:
      'radial-gradient(circle,rgba(247,147,78,1) 0%,rgba(253,187,72,1) 100%)',
    cardBackgroundHover:
      'radial-gradient(circle,rgb(251, 255, 0) 0%,rgb(196, 199, 0) 100%)',
    cardBorder: 'outset 3px silver',
    iconBackground: 'rgba(255, 255, 255, 0.5)',
    toggleBackground:
      'radial-gradient(circle, rgb(134 137 0) 0%, rgb(193 137 0) 100%)',
  },
  dark: {
    theme: 'Dark',
    color: 'lightgray',
    themeIcon: '🌙',
    mainBackground: 'url(/back_dark.jpeg)',
    menuBackground: 'rgba(2, 39, 0, 0.8)',
    searchWrapperBackground: 'rgb(0 0 0 / 60%)',
    cardBackground:
      'radial-gradient(circle, rgb(22 74 25) 0%, rgb(10 21 13) 100%)',
    cardBackgroundHover:
      'radial-gradient(circle, rgb(35 118 40) 0%, rgb(18 39 24) 100%)',
    cardBorder: 'outset 3px #006e2a',
    iconBackground: 'rgb(74 74 74 / 50%)',
    toggleBackground:
      'radial-gradient(circle, rgb(22, 74, 25) 0%, rgb(10, 21, 13) 100%)',
  },
};

type themeSetting = typeof themeSettings.light;

type ThemeContextType = {
  themePicker: themeSetting;
  toggleIsLightTheme: Dispatch<SetStateAction<boolean>>;
};

// export const ThemeContext = createContext(themeSettings.light);
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
