import React from 'react';
import { ShapeName } from '../contexts/CellContext';
import Shape from './Shape';

interface Props {
  onShapeSelect: (value: ShapeName) => void;
  selected?: ShapeName;
}

const ShapePicker = function ({ onShapeSelect, selected }: Props): JSX.Element {
  const shapeSelected = function (event: React.ChangeEvent<HTMLInputElement>) {
    onShapeSelect(event.target.value as ShapeName);
  };

  return (
    <div className='grid grid-cols-4'>
      <div className='flex items-center justify-center'>
        <label className='contents cursor-pointer' htmlFor='none'>
          None
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
      <div className='flex items-center justify-center'>
        <label className='contents cursor-pointer' htmlFor='triangle'>
          <Shape shape='triangle' />
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
      <div className='flex items-center justify-center'>
        <label className='contents cursor-pointer' htmlFor='circle'>
          <Shape shape='circle' />
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
      <div className='flex items-center justify-center'>
        <label className='contents cursor-pointer' htmlFor='arc'>
          <Shape shape='arc' />
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
