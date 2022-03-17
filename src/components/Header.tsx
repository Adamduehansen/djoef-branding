import domToImage from 'dom-to-image';
import download from 'downloadjs';
import { useContext } from 'react';
import { CellContext } from '../contexts/CellContext';
import SettingsContext from '../contexts/SettingsContext';
import ThemeSelector from './ThemeSelector';

interface Props {
  gridElement: React.RefObject<HTMLDivElement>;
}

const Header = function ({ gridElement }: Props): JSX.Element {
  const { showGrid, setShowGrid } = useContext(SettingsContext);
  const { clearCells } = useContext(CellContext);

  return (
    <div className='p-4 flex bg-canvas border-b justify-between'>
      <div className='flex items-center'>
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
        <button className='flex items-center pr-8' onClick={clearCells}>
          <span className='pr-1'>Ryd</span>
          <svg id='icon-bin' viewBox='0 0 32 32' className='w-[20px] h-[20px]'>
            <path d='M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z'></path>
            <path d='M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z'></path>
          </svg>
        </button>
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
      <div className='flex items-center border-l-2'>
        <div className='w-[32px] h-[32px] mx-4'>
          <a
            href='https://github.com/Adamduehansen/djoef-branding'
            target='_blank'
            rel='noreferrer'
            title='Github repository'
          >
            <svg id='icon-github' viewBox='0 0 32 32'>
              <path d='M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z'></path>
            </svg>
          </a>
        </div>
        <div>V. {process.env.REACT_APP_VERSION}</div>
      </div>
    </div>
  );
};

export default Header;
