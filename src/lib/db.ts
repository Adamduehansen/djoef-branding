import { DBSchema, openDB } from 'idb';
import { Cell } from '../contexts/CellContext';

interface DB extends DBSchema {
  grid: {
    key: string;
    value: Cell;
  };
}

const getDB = async function () {
  return await openDB<DB>('djoef-branding', 1, {
    upgrade: function (db) {
      db.createObjectStore('grid', {
        keyPath: 'id',
      });
    },
  });
};

export const storeGrid = async function (cells: Cell[]) {
  const db = await getDB();
  const transaction = db.transaction('grid', 'readwrite');
  const store = transaction.objectStore('grid');
  await store.clear();
  cells.forEach(async (cell) => {
    await store.add(cell);
  });
  await transaction.done;
};

export const getGrid = async function () {
  const db = await getDB();
  return await db.getAll('grid');
};
