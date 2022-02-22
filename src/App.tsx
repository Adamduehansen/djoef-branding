import CellProvider from './lib/CellProvider';
import EditCell from './components/EditCell';
import Grid from './components/Grid';
import ThemeProvider from './lib/ThemeProvider';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <CellProvider>
      <ThemeProvider>
        <div className='w-screen h-screen flex items-center flex-col justify-center'>
          <ThemeSelector />
          <Grid />
          <EditCell />
        </div>
      </ThemeProvider>
    </CellProvider>
  );
}

export default App;
