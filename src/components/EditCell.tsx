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
      <div>
        <div>
          <h2>Baggrundsfarve</h2>
          <div className='grid grid-cols-4'>
            <div>
              <label
                htmlFor='bg-color-none'
                className={classNames(
                  'h-[50px]',
                  'w-[50px]',
                  'block',
                  'cursor-pointer'
                )}
              >
                Ingen
              </label>
              <input
                type='radio'
                id='bg-color-none'
                name='bg-color'
                value={undefined}
                onChange={(event) => {
                  setCellBackgroundColor(selectedCellId, undefined);
                }}
                checked={!selectedCell?.backgroundColor}
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
        <div>
          <div>
            <h2>Figur</h2>
            <ShapePicker
              onShapeSelect={(value) => {
                setCellShape(selectedCellId, value);
              }}
              selected={selectedCell?.shape}
              displayColor={selectedCell?.shapeColor || 'base'}
            />
          </div>
          <div>
            <label>Rotation</label>
            <button
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
              Roter
            </button>
          </div>
          <div>
            <label htmlFor='cell-shape-color'>Figur farve</label>
            <div className='flex'>
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
      </div>
    );
  }
};

export default EditCell;
