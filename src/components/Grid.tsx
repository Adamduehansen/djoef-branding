import classnames from 'classnames';
import useCell from '../hooks/useCellContext';
import Shape from './Shape';

const Grid: React.FC = function () {
  const { setSelectedCell, cells, selectedCellId } = useCell();

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
              `bg-${cell.backgroundColor}`,
              `rotate-${cell.shapeRotation}`,
              {
                'border-green-300': cell.id === selectedCellId,
              }
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
