import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ColorPicker = function (): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div>None</div>
      <div>{theme}-main</div>
      <div>{theme}-lys</div>
      <div>{theme}-signal</div>
    </div>
  );
};
