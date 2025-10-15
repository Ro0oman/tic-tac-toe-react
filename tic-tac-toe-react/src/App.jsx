import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cell} from './Cell'


function App() {
  const [turn, setTurn] = useState('X')
  const [grid, setGrid] = useState([
    '','','',
    '','','',
    '','','',
  ])

  function handleCellClick(id) {
    console.log("Se pulsó la celda:", id);
  }

  const handleReset = () => {
    setGrid([
      '','','',
      '','','',
      '','','',
    ])
    setTurn('X')
  }

  return (
    <>
      <h1>Player's <span className='player'>{turn}</span> Turn</h1>
      <div className='grid'> 
        {
          grid.map((element, i) => {
            return (
              <Cell onCellClick={handleCellClick} setGrid={setGrid} setTurn={setTurn} turn={turn} cellId={i} grid={grid}>{grid[i]}</Cell>
            );
          })
        }
      </div>

      <div className='resetBox'>
          <button className='resetButton' onClick={handleReset}> Reset </button>
      </div>

    </> 
  )
}

export default App
