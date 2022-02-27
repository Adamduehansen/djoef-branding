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
    <div className='p-4 flex bg-canvas border-b justify-between'>
      <div className='flex'>
        <div className='pr-8'>
          <ThemeSelector />
        </div>
        <div className='pr-8'>
          <label htmlFor='remove-grid-checkbox' className='pr-1'>
            Vis hjælpelinjer
          </label>
          <input
            type='checkbox'
            id='remove-grid-checkbox'
            checked={showGrid}
            onChange={(event) => {
              setShowGrid(event.target.checked);
            }}
          />
        </div>
        <button
          className='flex items-center'
          onClick={() => {
            domToImage.toPng(gridElement.current!).then((dataUrl) => {
              download(dataUrl);
            });
          }}
        >
          <span className='pr-1'>Download</span>
          <svg
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[20px] h-[20px]'
          >
            <path d='M256,409.7,152.05,305.75,173.5,284.3l67.33,67.32V34h30.34V351.62L338.5,284.3,360,305.75ZM445.92,351v93.22a3.61,3.61,0,0,1-3.47,3.48H69.15a3.3,3.3,0,0,1-3.07-3.48V351H35.74v93.22A33.66,33.66,0,0,0,69.15,478h373.3a33.85,33.85,0,0,0,33.81-33.82V351Z' />
          </svg>
        </button>
      </div>
      <div>V. {process.env.REACT_APP_VERSION}</div>
    </div>
  );
};

export default Header;
