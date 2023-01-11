import 'styled-components';
interface ButtonTheme {
  color: string;
  background: string;
  border: string;
  borderSize: string;
  padding: string;
  height: string;
  width: string;
  hoverColor: string;
  hoverBackground: string;
  hoverBorder: string;
  focusColor: string;
  focusBackground: string;
  focusBorder: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
    };
    buttons: {
      [key: string]: ButtonTheme;
      // primary: ButtonTheme;
      // secondary: ButtonTheme;
    };
  }
}
