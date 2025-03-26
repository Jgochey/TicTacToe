'use client';

import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Board from '../components/Board';

export default function Home() {



  useEffect(() => {
    document.title = 'Home';
  }, []);





  return (
    <>
    <Navbar />
    <h1>Welcome to TicTacToe!</h1>
    <Board />
    </>
    


  );
}
