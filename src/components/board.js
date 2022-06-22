import './board.css';
import Box from "./box";
import React from 'react';

const board = () => {
  return (
    <div>
      <Box value="X" onClick={null}/>
    </div>
  )
}

export default board