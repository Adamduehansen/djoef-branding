import { createContext } from 'react';

export type Theme = 'skov' | 'jord' | 'hav' | 'sand' | 'dis';

interface Props {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({
  theme: 'skov',
  setTheme: () => {},
});
