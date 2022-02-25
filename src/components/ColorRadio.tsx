import classNames from 'classnames';
import { useContext } from 'react';
import { ColorVariant } from '../contexts/CellContext';
import { ThemeContext } from '../contexts/ThemeContext';

type Props = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'name' | 'checked'
> & {
  value: ColorVariant;
  onChange: (value: ColorVariant) => void;
};

const ColorRadio = function ({
  id,
  name,
  value,
  checked,
  onChange,
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <label
        htmlFor={id}
        className={classNames(
          'h-[50px]',
          'w-[50px]',
          'block',
          `bg-${theme}-${value}`,
          'cursor-pointer'
        )}
      ></label>
      <input
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={(event) => {
          onChange(event.target.value as ColorVariant);
        }}
        checked={checked}
      />
    </div>
  );
};

export default ColorRadio;
