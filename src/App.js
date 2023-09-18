import React, { useState } from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 80px);
  gap: 10px;
  margin: 20px auto;
  width: 600px;
`;

const Cell = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.color || 'white'};
  border: 2px solid #333;
  border-radius: 50%;
  cursor: pointer;
`;

const App = () => {
  const [board, setBoard] = useState(Array(7).fill(Array(6).fill(null)));
  const [isRedTurn, setIsRedTurn] = useState(true);

  const handleClick = (col) => {
    const newBoard = [...board];
    const columnIndex = newBoard[col].indexOf(null);
    
    if (columnIndex !== -1) {
      newBoard[col][columnIndex] = isRedTurn ? 'red' : 'yellow';
      setBoard(newBoard);
      setIsRedTurn(!isRedTurn);
    }
  };

  return (
    <div className="App">
      <h1>Connect Four</h1>
      <BoardContainer>
        {board.map((column, colIndex) => (
          column.map((cellColor, rowIndex) => (
            <Cell
              key={`${colIndex}-${rowIndex}`}
              color={cellColor}
              onClick={() => handleClick(colIndex)}
            />
          ))
        ))}
      </BoardContainer>
    </div>
  );
};

export default App;
