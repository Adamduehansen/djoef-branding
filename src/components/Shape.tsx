import classNames from 'classnames';
import { useContext } from 'react';
import { ShapeName } from '../contexts/CellContext';
import { ThemeContext } from '../contexts/ThemeContext';

interface Props {
  shape?: ShapeName;
  color?: string;
  className?: string;
}

const Triangle = () => {
  return <path d='M0 120V0l120 120Z' />;
};

const Circle = () => {
  return <circle cx='60' cy='60' r='60' />;
};

const Arc = () => {
  return <path d='M0 0a120 120 0 0 1 84.853 35.147A120 120 0 0 1 120 120H0Z' />;
};

const getShapeFromKey = function (key?: ShapeName) {
  switch (key) {
    case 'triangle':
      return () => <Triangle />;
    case 'circle':
      return () => <Circle />;
    case 'arc':
      return () => <Arc />;
  }
};

const Shape: React.FC<Props> = function ({ shape, color, className }) {
  const { theme } = useContext(ThemeContext);

  const Component = getShapeFromKey(shape);

  if (!Component) {
    return null;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 120 120'
      className={classNames(`fill-${theme}-${color}`, className)}
    >
      <Component />
    </svg>
  );
};

export default Shape;
