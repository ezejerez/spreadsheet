import React from 'react';
import './table.css';
import Input from '../Input/input';

const COLUMNS = 10;
const ROWS = 40;

// Table matrix
const tableMatrix = new Array(COLUMNS);

for (let x = 0; x < COLUMNS; x++) {
  tableMatrix[x] = new Array(ROWS);
  for (let y = 0; y < ROWS; y++) {
    tableMatrix[x][y] = null;
  }
}

export default function Table() {
  return (
    <div className='container'>
      {tableMatrix.map((el, x) => (
        <div key={x}>
          {el.map((el2, y) => (
            <Input key={`${x}-${y}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
