import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from '../contexts/ThemeContext';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeProvider = function ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  const { storeValue, getValue } = useLocalStorage();

  const [theme, setTheme] = useState<Theme>(() => {
    return (getValue('theme') as Theme) || 'skov';
  });

  useEffect(() => {
    storeValue('theme', theme);
  }, [theme, storeValue]);

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
