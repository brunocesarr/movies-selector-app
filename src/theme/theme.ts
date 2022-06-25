import { Theme as ThemeNavigation } from '@react-navigation/native';
import { Colors, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/src/types';

export const colors = {
  black_150: '#1B1C27',
  black_170: '#272836',
  gray_150: '#64656C',
};

export const fontsSizes = {
  FONT_SIZE_SMALL: 14,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_LARGE: 18,
  FONT_SIZE_TITLE: 20,
  FONT_SIZE_TITLE_LOGIN: 48,
};

export const themeNavigation: ThemeNavigation = {
  colors: {
    primary: Colors.green100,
    text: Colors.white,
    background: Colors.black,
    notification: Colors.red700,
    border: Colors.cyan300,
    card: Colors.cyan400,
  },
  dark: true,
};

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue700,
    accent: Colors.cyan50,
    placeholder: Colors.cyan400,
    error: Colors.red500,
    background: Colors.black,
    text: Colors.white,
  },
  fonts: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '600',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '700',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
  },
};
