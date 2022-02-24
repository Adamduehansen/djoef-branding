import { createContext } from 'react';

export type ShapeRotation = 0 | 90 | 180 | 270;
export type ShapeName = 'triangle' | 'circle' | 'arc' | 'none';
export type ColorVariant = 'base' | 'lys' | 'signal';

export interface Cell {
  id: string;
  backgroundColor?: ColorVariant;
  shape?: ShapeName;
  shapeColor: ColorVariant;
  shapeRotation: ShapeRotation;
}

interface CellContextProps {
  selectedCellId?: string;
  setSelectedCell: (cellId: string) => void;
  cells: Cell[];
  setCellBackgroundColor: (cellId: string, color: ColorVariant) => void;
  setCellShape: (cellId: string, shape: ShapeName) => void;
  setCellShapeColor: (cellId: string, color: ColorVariant) => void;
  setCellShapeRotation: (cellId: string, rotation: ShapeRotation) => void;
}

export const CellContext = createContext<CellContextProps>({
  setSelectedCell: () => {},
  cells: [],
  setCellBackgroundColor: () => {},
  setCellShape: () => {},
  setCellShapeColor: () => {},
  setCellShapeRotation: () => {},
});
