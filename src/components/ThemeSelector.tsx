import { useContext } from 'react';
import { Theme, ThemeContext } from '../contexts/ThemeContext';

const ThemeSelector = function (): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <label htmlFor='theme_selector'>Farve Tema</label>
      <select
        id='theme_selector'
        value={theme}
        onChange={(event) => {
          setTheme(event.target.value as Theme);
        }}
      >
        <option value='skov'>Skov</option>
        <option value='jord'>Jord</option>
        <option value='hav'>Hav</option>
        <option value='sand'>Sand</option>
        <option value='dis'>Dis</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
