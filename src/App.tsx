import CellProvider from './components/CellProvider';
import EditCell from './components/EditCell';
import Grid from './components/Grid';

function App() {
  return (
    <CellProvider>
      <div className='w-screen h-screen flex items-center flex-col justify-center'>
        <Grid />
        <EditCell />
      </div>
    </CellProvider>
  );
}

export default App;
