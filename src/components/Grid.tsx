import classnames from 'classnames';
import { useContext } from 'react';
import { CellContext } from '../contexts/CellContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Shape from './Shape';

const Grid: React.FC = function () {
  const { setSelectedCell, cells } = useContext(CellContext);
  const { theme } = useContext(ThemeContext);

  const onCellClick = function (event: React.MouseEvent<HTMLElement>) {
    const cellId = event.currentTarget.getAttribute('data-cell-id')!;
    setSelectedCell(cellId);
  };

  return (
    <div className='w-[200px]'>
      <div className='grid grid-cols-4'>
        {cells.map((cell) => (
          <div
            key={cell.id}
            onClick={onCellClick}
            className={classnames(
              'border w-[48px] h-[48px]',
              `rotate-${cell.shapeRotation}`,
              `bg-${theme}-${cell.backgroundColor}`
            )}
            data-cell-id={cell.id}
          >
            <Shape shape={cell.shape} color={cell.shapeColor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
