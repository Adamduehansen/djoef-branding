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
            <div className='relative h-screen flex justify-center'>
              <div className='flex justify-center items-center'>
                <Grid ref={gridRef} />
              </div>
              <div className='absolute right-0 top-0'>
                <div className='flex'>
                  <EditCell />
                </div>
              </div>
            </div>
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
