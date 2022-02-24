import classNames from 'classnames';
import { ChangeEvent, useContext } from 'react';
import { ColorVariant } from '../contexts/CellContext';
import { ThemeContext } from '../contexts/ThemeContext';

interface Props {
  selected: ColorVariant;
  onColorSelected: (value: ColorVariant) => void;
}

const ColorPicker = function ({
  selected,
  onColorSelected,
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const colorSelected = function (event: ChangeEvent<HTMLInputElement>) {
    onColorSelected(event.target.value as ColorVariant);
  };

  return (
    <div className='grid grid-cols-4 gap-x-2'>
      <div>
        <label
          htmlFor='shape-color-base'
          className={classNames(
            'h-[50px]',
            'w-[50px]',
            'block',
            `bg-${theme}-base`,
            'cursor-pointer'
          )}
        ></label>{' '}
        <input
          type='radio'
          name='shape-color'
          id='shape-color-base'
          value='base'
          onChange={colorSelected}
          checked={selected === 'base'}
        />
      </div>
      <div>
        <label
          htmlFor='shape-color-lys'
          className={classNames(
            'h-[50px]',
            'w-[50px]',
            'block',
            `bg-${theme}-lys`,
            'cursor-pointer'
          )}
        ></label>{' '}
        <input
          type='radio'
          name='shape-color'
          id='shape-color-lys'
          value='lys'
          onChange={colorSelected}
          checked={selected === 'lys'}
        />
      </div>
      <div>
        <label
          htmlFor='shape-color-signal'
          className={classNames(
            'h-[50px]',
            'w-[50px]',
            'block',
            `bg-${theme}-signal`,
            'cursor-pointer'
          )}
        ></label>{' '}
        <input
          type='radio'
          name='shape-color'
          id='shape-color-signal'
          value='signal'
          onChange={colorSelected}
          checked={selected === 'signal'}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
