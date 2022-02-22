import { useContext, useEffect, useState } from 'react';
import { Cell, CellContext, ShapeRotation } from '../contexts/CellContext';
import ShapePicker from './ShapePicker';

const EditCell: React.FC = function () {
  const [selectedCell, setSelectedCell] = useState<Cell>();

  const {
    selectedCellId,
    setCellBackgroundColor,
    setCellShape,
    setCellShapeColor,
    setCellShapeRotation,
    cells,
  } = useContext(CellContext);

  useEffect(() => {
    const selectedCell = cells.find((cell) => cell.id === selectedCellId);
    setSelectedCell(selectedCell);
  }, [cells, selectedCellId]);

  if (!selectedCellId) {
    return null;
  } else {
    return (
      <div>
        <div>
          <label htmlFor='cell-background-color'>Background Color</label>
          <select
            id='cell-background-color'
            onChange={(event) => {
              setCellBackgroundColor(selectedCellId, event.target.value);
            }}
            value={selectedCell?.backgroundColor}
          >
            <option value='white'>Hvid</option>
            <option value='skov'>Skov</option>
            <option value='skov-lys'>Skov Lys</option>
            <option value='skov-signal'>Skov Signal</option>
          </select>
        </div>
        <div>
          <label>Shape</label>
          <ShapePicker
            onShapeSelect={(value) => {
              setCellShape(selectedCellId, value);
            }}
            selected={selectedCell?.shape}
          />
        </div>
        <div>
          <label>Rotation</label>
          <button
            onClick={() => {
              if (selectedCell?.shapeRotation === 270) {
                setCellShapeRotation(selectedCellId, 0);
              } else {
                setCellShapeRotation(
                  selectedCellId,
                  (selectedCell!.shapeRotation + 90) as ShapeRotation
                );
              }
            }}
          >
            Rotate
          </button>
        </div>
        <div>
          <label htmlFor='cell-shape-color'>Shape Color</label>
          <select
            id='cell-shape-color'
            onChange={(event) => {
              setCellShapeColor(selectedCellId, event.target.value);
            }}
            value={selectedCell?.shapeColor}
          >
            <option value='black'>Sort</option>
            <option value='skov'>Skov</option>
            <option value='skov-lys'>Skov Lys</option>
            <option value='skov-signal'>Skov Signal</option>
          </select>
        </div>
      </div>
    );
  }
};

export default EditCell;
