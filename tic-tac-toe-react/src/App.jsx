import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cell} from './Cell'


function App() {
  const [count, setCount] = useState(0)
  const [turn, setTurn] = useState('X')

   const grid = [
    '','','',
    '','','',
    '','','',
  ]
  

  return (
    <>
      <h1>Player's <span className='player'>{turn}</span> Turn</h1>
      <div className='grid'> 
        {
          grid.map((element, i) => {
            return (
              <Cell  cellId={i} grid={grid}>element</Cell>
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
