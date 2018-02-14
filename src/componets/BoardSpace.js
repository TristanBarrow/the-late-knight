import React from 'react';

class BoardSpace extends React.Component {
  render() {
    return (
      <button className='board-space'>
        {this.props.data}
      </button>
    )
  }
}

export default BoardSpace;