import { useState } from 'react';
import {
  CellContext,
  Cell,
  ShapeRotation,
  ShapeName,
} from '../contexts/CellContext';

const CellProvider: React.FC = function ({ children }) {
  const [cells, setCells] = useState<Cell[]>(() => {
    return [1, 2, 3, 4]
      .map((columnIndex) => {
        return [1, 2, 3, 4].map((rowIndex): Cell => {
          return {
            id: `${columnIndex}-${rowIndex}`,
            backgroundColor: 'white',
            shapeColor: 'black',
            shapeRotation: 0,
          };
        });
      })
      .flat();
  });
  const [cellId, setCellId] = useState<string>(() => {
    return cells[0].id;
  });

  const onCellSelected = function (cellId: string) {
    setCellId(cellId);
  };

  const onSetCellBackground = function (cellId: string, color: string) {
    setCells((currentCells) => {
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

  const onSetCellShapeColor = function (cellId: string, shapeColor: string) {
    setCells((currentCells) => {
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
      }}
    >
      {children}
    </CellContext.Provider>
  );
};

export default CellProvider;
