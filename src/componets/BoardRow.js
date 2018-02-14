import React from 'react';
import BoardSpace from './BoardSpace';

const BoardRow = ({ row }) => (
  <div className='board-row'>
    {
      row.map((space) => {
        return <BoardSpace key={space} data={space}/>;
      })
    }
  </div>
);

export default BoardRow;