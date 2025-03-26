'use client';

import { useEffect } from 'react';
import Board from '../components/Board';

export default function Home() {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
    <h1>Welcome to TicTacToe!</h1>
    <Board />
    </>
  );
}
