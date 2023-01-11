import { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from '../themes';

interface ThemeContextData {
  toggleTheme(name: string): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({
  children,
  themes,
}: {
  children: any;
  themes: DefaultTheme[];
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
  console.log('tema dentro: ' + theme);

  const toggleTheme = useCallback(
    (name) => {
      const newTheme = themes.findIndex((theme) => theme.name === name);
      if (theme.name === name || newTheme === -1) {
        return;
      }
      setTheme(themes[newTheme]);
    },
    [theme, themes],
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
