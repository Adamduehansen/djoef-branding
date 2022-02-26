import domToImage from 'dom-to-image';
import download from 'downloadjs';
import { useContext } from 'react';
import SettingsContext from '../contexts/SettingsContext';
import ThemeSelector from './ThemeSelector';

interface Props {
  gridElement: React.RefObject<HTMLDivElement>;
}

const Header = function ({ gridElement }: Props): JSX.Element {
  const { showGrid, setShowGrid } = useContext(SettingsContext);

  return (
    <div className='p-4 flex'>
      <ThemeSelector />
      <div>
        <label htmlFor='remove-grid-checkbox'>Vis hjælpelinjer</label>
        <input
          type='checkbox'
          id='remove-grid-checkbox'
          checked={showGrid}
          onChange={(event) => {
            setShowGrid(event.target.checked);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            domToImage.toPng(gridElement.current!).then((dataUrl) => {
              download(dataUrl);
            });
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Header;
