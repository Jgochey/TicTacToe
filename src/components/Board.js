'use client';

import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Board() {
  const [tiles, setTiles] = useState(Array(9).fill('-')); // State to track tile values, starting with '-' for empty.
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  const handleReset = () => {
    setTiles(Array(9).fill('-'));
    setPlayerOneTurn(true); 
  };

  const handleScores = () => {
  setPlayerOneScore(0);
  setPlayerTwoScore(0);
  };

  const checkWinner = (updatedTiles, currentPlayer) => {
    let winnerFound = false;

  winningCombos.forEach(([a, b, c]) => {
    if (!winnerFound && updatedTiles[a] === updatedTiles[b] && updatedTiles[b] === updatedTiles[c] && updatedTiles[a] !== '-') {
      winnerFound = true;

      if (currentPlayer === 'X') {
        setPlayerOneScore((prevScore) => prevScore + 1);
        alert('Player One wins!');
      } else if (currentPlayer === 'O') {
        setPlayerTwoScore((prevScore) => prevScore + 1);
        alert('Player Two wins!');
      }
      handleReset();
      }
    });

  // If no winner is found and all tiles are filled, declare a draw.
  if (!winnerFound && updatedTiles.every((tile) => tile !== '-')) {
    alert('It\'s a draw!');
    handleReset();
      }
    };

  const handleSelect = (index) => {
    if (tiles[index] !== '-') 
      return; // Prevent overwriting a tile.

  const newTiles = [...tiles];
  newTiles[index] = playerOneTurn ? 'X' : 'O';
  setTiles(newTiles);
  setPlayerOneTurn(!playerOneTurn);

  // Check for a winner immediately after the move.
  const currentPlayer = playerOneTurn ? 'X' : 'O';
  checkWinner(newTiles, currentPlayer);
  };


  return (
    <><div>Scoreboard</div>
    <h3>Player One: {playerOneScore} -- Player Two: {playerTwoScore}</h3>
    <div className="row1">
      <Button onClick={() => handleSelect(0)}>{tiles[0]}</Button>
      <Button onClick={() => handleSelect(1)}>{tiles[1]}</Button>
      <Button onClick={() => handleSelect(2)}>{tiles[2]}</Button>
    </div>
    <div className="row2">
      <Button onClick={() => handleSelect(3)}>{tiles[3]}</Button>
      <Button onClick={() => handleSelect(4)}>{tiles[4]}</Button>
      <Button onClick={() => handleSelect(5)}>{tiles[5]}</Button>
    </div>
    <div className="row3">
      <Button onClick={() => handleSelect(6)}>{tiles[6]}</Button>
      <Button onClick={() => handleSelect(7)}>{tiles[7]}</Button>
      <Button onClick={() => handleSelect(8)}>{tiles[8]}</Button>
    </div>

    <h4>Player {playerOneTurn ? 'One' : 'Two'}&apos;s Turn</h4>

    <Button onClick={handleReset}>Reset Game</Button>
    <Button onClick={handleScores}>Clear Scores</Button>
      </>
  );
}
