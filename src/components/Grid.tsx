import React from 'react';
import classnames from 'classnames';
import { useContext } from 'react';
import { CellContext } from '../contexts/CellContext';
import SettingsContext from '../contexts/SettingsContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Shape from './Shape';

const Grid = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { setSelectedCell, cells, selectedCellId } = useContext(CellContext);
  const { theme } = useContext(ThemeContext);
  const { showGrid } = useContext(SettingsContext);

  const onCellClick = function (event: React.MouseEvent<HTMLElement>) {
    const cellId = event.currentTarget.getAttribute('data-cell-id')!;
    setSelectedCell(cellId);
  };

  return (
    <div ref={ref} className='grid grid-cols-4'>
      {cells.map((cell) => (
        <div
          key={cell.id}
          onClick={onCellClick}
          className={classnames(
            'w-[160px] h-[160px]',
            'cursor-pointer',
            `rotate-${cell.shapeRotation}`,
            `bg-${theme}-${cell.backgroundColor}`,
            {
              border: cell.id !== selectedCellId && showGrid,
              'border-4': cell.id === selectedCellId && showGrid,
            }
          )}
          data-cell-id={cell.id}
        >
          <Shape shape={cell.shape} color={cell.shapeColor} />
        </div>
      ))}
    </div>
  );
});

export default Grid;
