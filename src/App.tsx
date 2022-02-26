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
          <div className='w-screen h-screen flex justify-center items-center'>
            <Grid ref={gridRef} />
          </div>
          <div className='h-screen fixed right-0 top-0'>
            <div className='flex items-center'>
              <EditCell gridRef={gridRef} />
            </div>
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
