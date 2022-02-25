import { useState } from 'react';
import SettingsContext from '../contexts/SettingsContext';

const SettingsProvider: React.FC = function ({ children }) {
  const [showGrid, setShowGrid] = useState(true);

  const onSetShowGrid = function (value: boolean) {
    setShowGrid(value);
  };

  return (
    <SettingsContext.Provider
      value={{
        showGrid: showGrid,
        setShowGrid: onSetShowGrid,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
