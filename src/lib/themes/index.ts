import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  colors: {
    primary: '#44b9b7',
    secondary: '#00908c',
    tertiary: '#afd6d6',
    quaternary: '#b4e6e5',
    background: '#F2F3F5',
    black: '#212121',
    darkGray: '#666666',
    gray: '#9B9B9B',
    lightGray: '#DFDFDF',
    white: '#FDFDFD',
  },
  fontSizes: {
    mini: '10px',
    small: '12px',
    medium: '14px',
    default: '16px',
    large: '18px',
    giant: '22px',
  },
};

export const themes: DefaultTheme[] = [
  {
    ...defaultTheme,
    name: 'lina',
  },
];
