import classNames from 'classnames';
import { ColorVariant, ShapeName } from '../contexts/CellContext';
import Shape from './Shape';

interface Props {
  onShapeSelect: (value: ShapeName) => void;
  selected?: ShapeName;
  displayColor: ColorVariant;
}

const ShapePicker = function ({
  onShapeSelect,
  selected,
  displayColor,
}: Props): JSX.Element {
  const shapeSelected = function (event: React.ChangeEvent<HTMLInputElement>) {
    onShapeSelect(event.target.value as ShapeName);
  };

  return (
    <div className='grid grid-cols-4'>
      <div>
        <label
          className={classNames(
            'flex justify-center items-center',
            'cursor-pointer',
            'h-[72px] w-[72px]',
            {
              'border-4': !selected,
            }
          )}
          htmlFor='none'
        >
          Ingen
        </label>
        <input
          type='radio'
          name='shape'
          id='none'
          className='hidden'
          value={undefined}
          onChange={shapeSelected}
          checked={!selected}
        />
      </div>
      <div>
        <label className='contents cursor-pointer' htmlFor='triangle'>
          <Shape
            shape='triangle'
            color={displayColor}
            size={72}
            className={classNames({
              'border-4': selected === 'triangle',
            })}
          />
        </label>
        <input
          type='radio'
          name='shape'
          id='triangle'
          className='hidden'
          value='triangle'
          onChange={shapeSelected}
          checked={selected === 'triangle'}
        />
      </div>
      <div>
        <label className='contents cursor-pointer' htmlFor='circle'>
          <Shape
            shape='circle'
            color={displayColor}
            size={72}
            className={classNames({
              'border-4': selected === 'circle',
            })}
          />
        </label>
        <input
          type='radio'
          name='shape'
          id='circle'
          className='hidden'
          value='circle'
          onChange={shapeSelected}
          checked={selected === 'circle'}
        />
      </div>
      <div>
        <label className='contents cursor-pointer' htmlFor='arc'>
          <Shape
            shape='arc'
            color={displayColor}
            size={72}
            className={classNames({
              'border-4': selected === 'arc',
            })}
          />
        </label>
        <input
          type='radio'
          name='shape'
          id='arc'
          className='hidden'
          value='arc'
          onChange={shapeSelected}
          checked={selected === 'arc'}
        />
      </div>
    </div>
  );
};

export default ShapePicker;
