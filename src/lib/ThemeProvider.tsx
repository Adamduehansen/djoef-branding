import { useState } from 'react';
import { Theme, ThemeContext } from '../contexts/ThemeContext';

const ThemeProvider = function ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  const [theme, setTheme] = useState<Theme>('skov');

  const onSetTheme = function (theme: Theme) {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: onSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
