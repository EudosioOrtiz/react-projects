import { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import {Square} from './components/Square.jsx'
import {TURNS} from "./constans.js";
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModel.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import './App.css'

function App() {
  const [board, setBoard] = useState(()=>{
    // el localstorage se ejecuta una sola vez por que solo se ejecuta una vez y no queremos que se renderize de nuevo
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn , setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X})
  const [ winner, setWinner] = useState(null)
  //los useStates siempre tienen que estar en el cuerpo del componente NO dentro de alguna validacion o loop

 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index)=>{
    if (board[index] || winner) return

    const newBoard = [...board];
    // ester cuidado cuando quieres renderizar el mismo array o objeto modificandolo
    newBoard[index]= turn
    setBoard(newBoard)
    //
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar sesion
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) //la actualizacion de los estados es asyncrona
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index)=>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
      
    </main>
  )
}

export default App
