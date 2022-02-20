import { useContext } from 'react';
import { CellContext } from '../contexts/CellContext';

const useCellContext = function () {
  return useContext(CellContext);
};

export default useCellContext;
