import { createContext } from 'react';

export type Theme = 'dis' | 'skov';

interface Props {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({
  theme: 'skov',
  setTheme: () => {},
});
