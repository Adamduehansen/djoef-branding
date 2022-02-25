import CellProvider from './lib/CellProvider';
import EditCell from './components/EditCell';
import Grid from './components/Grid';
import ThemeProvider from './lib/ThemeProvider';
import SettingsProvider from './lib/SettingsProvider';

function App() {
  return (
    <CellProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className='w-screen h-screen flex items-center justify-center'>
            <Grid />
            <EditCell />
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
