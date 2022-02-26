import CellProvider from './lib/CellProvider';
import EditCell from './components/EditCell';
import Grid from './components/Grid';
import ThemeProvider from './lib/ThemeProvider';
import SettingsProvider from './lib/SettingsProvider';
import { useRef } from 'react';
import Header from './components/Header';

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <CellProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className='w-screen h-screen flex flex-col'>
            <Header gridElement={gridRef} />
            <div className='h-screen flex'>
              <EditCell />
              <div className='flex w-full justify-center items-center'>
                <Grid ref={gridRef} />
              </div>
            </div>
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
