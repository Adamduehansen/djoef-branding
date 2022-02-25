import CellProvider from './lib/CellProvider';
import EditCell from './components/EditCell';
import Grid from './components/Grid';
import ThemeProvider from './lib/ThemeProvider';
import SettingsProvider from './lib/SettingsProvider';
import { useRef } from 'react';

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <CellProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className='w-screen h-screen flex items-center justify-center'>
            <Grid ref={gridRef} />
            <EditCell gridRef={gridRef} />
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
