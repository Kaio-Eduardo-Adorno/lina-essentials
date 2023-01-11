import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  colors: {
    primary: '#8667ec',
    secondary: '#6553bc',
  },
  buttons: {
    primary: {
      color: '#fdfdfd',
      background: '#8667ec',
      border: 'solid transparent',
      borderSize: '1px',
      padding: '8px 32px',
      height: '38px',
      width: 'auto',
      hoverColor: '#fdfdfd',
      hoverBackground: '#6553BC',
      hoverBorder: 'solid transparent',
      focusColor: '#8667ec',
      focusBackground: '#eeeafc',
      focusBorder: 'solid transparent',
    },

    secondary: {
      color: '#8667EC',
      background: '#EEEAFC',
      border: 'solid #DAD2F2',
      borderSize: '1px',
      padding: '8px 32px',
      height: '38px',
      width: 'auto',
      hoverColor: '#fdfdfd',
      hoverBackground: '#8667EC',
      hoverBorder: 'solid transparent',
      focusColor: '#8667EC',
      focusBackground: '#DAD2F2',
      focusBorder: 'solid transparent',
    },
  },
};

export const themes: DefaultTheme[] = [
  {
    name: 'spi',
    colors: {
      primary: '#8667ec',
      secondary: '#6553bc',
    },
    buttons: {
      primary: {
        color: 'red',
        background: '#8667ec',
        border: 'solid transparent',
        borderSize: '1px',
        padding: '8px 32px',
        height: '38px',
        width: 'auto',
        hoverColor: 'red',
        hoverBackground: '#6553BC',
        hoverBorder: 'solid transparent',
        focusColor: 'green',
        focusBackground: '#eeeafc',
        focusBorder: 'solid transparent',
      },
      secondary: {
        color: '#8667EC',
        background: '#EEEAFC',
        border: 'solid #DAD2F2',
        borderSize: '1px',
        padding: '8px 32px',
        height: '38px',
        width: 'auto',
        hoverColor: '#fdfdfd',
        hoverBackground: '#8667EC',
        hoverBorder: 'solid transparent',
        focusColor: '#8667EC',
        focusBackground: '#DAD2F2',
        focusBorder: 'solid transparent',
      },
    },
  },
];
