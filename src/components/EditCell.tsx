import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Cell, CellContext, ShapeRotation } from '../contexts/CellContext';
import ColorRadio from './ColorRadio';
import ShapePicker from './ShapePicker';

const EditCell: React.FC = function () {
  const [selectedCell, setSelectedCell] = useState<Cell>();

  const {
    selectedCellId,
    setCellBackgroundColor,
    setCellShape,
    setCellShapeColor,
    setCellShapeRotation,
    cells,
  } = useContext(CellContext);

  useEffect(() => {
    const selectedCell = cells.find((cell) => cell.id === selectedCellId);
    setSelectedCell(selectedCell);
  }, [cells, selectedCellId]);

  if (!selectedCellId) {
    return null;
  } else {
    return (
      <div className='h-full w-[400px] bg-canvas border-r p-4'>
        <div className='pb-8'>
          <h2 className='font-bold pb-2'>Baggrundsfarve</h2>
          <div className='grid grid-cols-4'>
            <div>
              <label
                htmlFor='bg-color-none'
                className={classNames(
                  'h-[72px] w-[72px]',
                  'cursor-pointer',
                  'flex items-center justify-center',
                  {
                    'border-4': selectedCell?.backgroundColor === undefined,
                  }
                )}
              >
                Ingen
              </label>
              <input
                type='radio'
                id='bg-color-none'
                name='bg-color'
                value={undefined}
                onChange={() => {
                  setCellBackgroundColor(selectedCellId, undefined);
                }}
                checked={!selectedCell?.backgroundColor}
                className='hidden'
              />
            </div>
            <ColorRadio
              id='bg-color-base'
              name='bg-color'
              value='base'
              checked={selectedCell?.backgroundColor === 'base'}
              onChange={(value) => {
                setCellBackgroundColor(selectedCellId, value);
              }}
            />
            <ColorRadio
              id='bg-color-lys'
              name='bg-color'
              value='lys'
              checked={selectedCell?.backgroundColor === 'lys'}
              onChange={(value) => {
                setCellBackgroundColor(selectedCellId, value);
              }}
            />
            <ColorRadio
              id='bg-color-signal'
              name='bg-color'
              value='signal'
              checked={selectedCell?.backgroundColor === 'signal'}
              onChange={(value) => {
                setCellBackgroundColor(selectedCellId, value);
              }}
            />
          </div>
        </div>
        <div className='pb-8'>
          <h2 className='font-bold pb-2'>Figur</h2>
          <ShapePicker
            onShapeSelect={(value) => {
              setCellShape(selectedCellId, value);
            }}
            selected={selectedCell?.shape}
            displayColor={selectedCell?.shapeColor || 'base'}
          />
          <button
            className='flex items-center'
            onClick={() => {
              if (selectedCell?.shapeRotation === 270) {
                setCellShapeRotation(selectedCellId, 0);
              } else {
                setCellShapeRotation(
                  selectedCellId,
                  (selectedCell!.shapeRotation + 90) as ShapeRotation
                );
              }
            }}
          >
            <span className='pr-1'>Roter</span>
            <svg
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-[20px] h-[20px]'
            >
              <path d='M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z' />
            </svg>
          </button>
        </div>
        <div className='pb-8'>
          <h2 className='font-bold pb-2'>Figur farve</h2>
          <div className='grid grid-cols-4'>
            <ColorRadio
              id='shape-color-base'
              name='shape-color'
              value='base'
              checked={selectedCell?.shapeColor === 'base'}
              onChange={(value) => {
                setCellShapeColor(selectedCellId, value);
              }}
            />
            <ColorRadio
              id='shape-color-lys'
              name='shape-color'
              value='lys'
              checked={selectedCell?.shapeColor === 'lys'}
              onChange={(value) => {
                setCellShapeColor(selectedCellId, value);
              }}
            />
            <ColorRadio
              id='shape-color-signal'
              name='shape-color'
              value='signal'
              checked={selectedCell?.shapeColor === 'signal'}
              onChange={(value) => {
                setCellShapeColor(selectedCellId, value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default EditCell;
