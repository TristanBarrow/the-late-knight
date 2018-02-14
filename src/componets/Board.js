import React from 'react';
import BoardRow from './BoardRow';
import boardLocations from '../setup/boardData';

class ChessBoard extends React.Component {
  render() {
    let id = 0;
    return (
      <div className='content-container'>
        <div className='board'>
          {
            boardLocations.map((row) => {
              return <BoardRow key={id++} row={row}/>;
            })
          }
        </div>
      </div>
    )
  }
}

export default ChessBoard;