import { useEffect, useState } from 'react';
import {
  CellContext,
  Cell,
  ShapeRotation,
  ShapeName,
  ColorVariant,
} from '../contexts/CellContext';
import { getGrid, storeGrid } from './db';

const makeCleanGrid = function () {
  return [1, 2, 3, 4]
    .map((columnIndex) => {
      return [1, 2, 3, 4].map((rowIndex): Cell => {
        return {
          id: `${columnIndex}-${rowIndex}`,
          backgroundColor: undefined,
          shapeColor: 'base',
          shapeRotation: 0,
        };
      });
    })
    .flat();
};

const CellProvider: React.FC = function ({ children }) {
  const [cells, setCells] = useState<Cell[]>(makeCleanGrid);
  const [cellId, setCellId] = useState<string>(() => {
    return cells[0].id;
  });

  useEffect(() => {
    getGrid().then((cells) => {
      if (cells.length > 0) {
        setCells(cells);
      }
    });
  }, []);

  useEffect(() => {
    storeGrid(cells);
  }, [cells]);

  const onCellSelected = function (cellId: string) {
    setCellId(cellId);
  };

  const onSetCellBackground = function (cellId: string, color?: ColorVariant) {
    setCells((currentCells): Cell[] => {
      return currentCells.map((cell) => {
        if (cell.id !== cellId) {
          return cell;
        } else {
          return {
            ...cell,
            backgroundColor: color,
          };
        }
      });
    });
  };

  const onSetCellShape = function (cellId: string, shape: ShapeName) {
    setCells((currentCells) => {
      return currentCells.map((cell): Cell => {
        if (cell.id !== cellId) {
          return cell;
        } else {
          return {
            ...cell,
            shape: shape,
          };
        }
      });
    });
  };

  const onSetCellShapeColor = function (
    cellId: string,
    shapeColor: ColorVariant
  ) {
    setCells((currentCells): Cell[] => {
      return currentCells.map((cell) => {
        if (cell.id !== cellId) {
          return cell;
        } else {
          return {
            ...cell,
            shapeColor: shapeColor,
          };
        }
      });
    });
  };

  const onSetCellShapeRotation = function (
    cellId: string,
    shapeRotation: ShapeRotation
  ) {
    setCells((currentCells) => {
      return currentCells.map((cell): Cell => {
        if (cell.id !== cellId) {
          return cell;
        } else {
          return {
            ...cell,
            shapeRotation: shapeRotation,
          };
        }
      });
    });
  };

  const onClearCells = function () {
    setCells(makeCleanGrid);
  };

  return (
    <CellContext.Provider
      value={{
        selectedCellId: cellId,
        setSelectedCell: onCellSelected,
        setCellBackgroundColor: onSetCellBackground,
        setCellShape: onSetCellShape,
        setCellShapeColor: onSetCellShapeColor,
        setCellShapeRotation: onSetCellShapeRotation,
        cells: cells,
        clearCells: onClearCells,
      }}
    >
      {children}
    </CellContext.Provider>
  );
};

export default CellProvider;
