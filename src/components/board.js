import './board.css';
import Box from "./box";
import React from 'react';

const board = ({board, onClick}) => {
  return (
    <div className='board'>
      {board.map((value, idx) => {
        return <Box value={value} onClick={() => value === null && onClick(idx)}/>
      })}
      
    </div>
  )
}

export default board