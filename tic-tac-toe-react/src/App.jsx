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



  return (
    <>
      <h1>Player's <span className='player'>{turn}</span> Turn</h1>
      <div className='grid'> 
        {
          grid.map((element, i) => {
            return (
              <Cell setGrid={setGrid} turn={turn} cellId={i} grid={grid}>{grid[i]}</Cell>
            );
          })
        }
      </div>

      <div className='resetBox'>
          <button className='resetButton'> Reset </button>
      </div>

    </> 
  )
}

export default App
