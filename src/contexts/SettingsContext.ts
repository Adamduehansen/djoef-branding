import { createContext } from 'react';

interface Props {
  showGrid: boolean;
  setShowGrid: (value: boolean) => void;
}

const SettingsContext = createContext<Props>({
  showGrid: true,
  setShowGrid: () => {},
});

export default SettingsContext;
