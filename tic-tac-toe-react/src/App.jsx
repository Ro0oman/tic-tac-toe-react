import { useState } from 'react'
import './App.css'
import {Cell} from './Cell'


function App() {
  const [turn, setTurn] = useState('X')
  const [winner, setWinner] = useState(false)
  const [grid, setGrid] = useState([
    '','','',
    '','','',
    '','','',
  ])

  function makeWinner(winner){
    if(winner === false){
      return
    }
    if(winner === "Draw"){
      return <h1 className='player'>Draw</h1>
    }
    return(
      <h1 >The player <span className='player'>{winner}</span> is the Winner</h1>
    )
  }

  function handleCellClick(id ,newGrid) {
    console.log("Se pulsó la celda:", newGrid);
    checkWinner(newGrid)
    console.log(checkWinner(newGrid));
    
    if(winner!==false){
      setWinner(winner)
    }else{
      checkDraw(newGrid)
    }
  }

  function checkWinner(newGrid){
    //Horizontal
    if(newGrid[0] === newGrid[1] && newGrid[1] === newGrid[2] && newGrid[0] !== ''){
      setWinner(newGrid[0])
      return newGrid[0]
    }else if(newGrid[3] === newGrid[4] && newGrid[4] === newGrid[5] && newGrid[3] !== ''){
      setWinner(newGrid[3])
      return newGrid[3]
    }else if(newGrid[6] === newGrid[7] && newGrid[7] === newGrid[8] && newGrid[6] !== ''){
      setWinner(newGrid[6])
      return newGrid[6]
    }
    //Vertical
    else if(newGrid[0] === newGrid[3] && newGrid[3] === newGrid[6] && newGrid[0] !== ''){
      setWinner(newGrid[0])
      return newGrid[0]
    }else if(newGrid[1] === newGrid[4] && newGrid[4] === newGrid[7] && newGrid[1] !== ''){
      setWinner(newGrid[1])
      return newGrid[1]
    }else if(newGrid[2] === newGrid[5] && newGrid[5] === newGrid[8] && newGrid[2] !== ''){
      setWinner(newGrid[2])
      return newGrid[2]
    }
    //Diagonal
    else if(newGrid[0] === newGrid[4] && newGrid[4] === newGrid[8] && newGrid[0] !== ''){
      setWinner(newGrid[0])
      return newGrid[0]
    }else if(newGrid[2] === newGrid[4] && newGrid[4] === newGrid[6] && newGrid[2] !== ''){
      setWinner(newGrid[2])
      return newGrid[2]
    }

  }
  function checkDraw(newGrid){
      if (newGrid.includes('')) {
      return false;
    }

    // Si hay un ganador, no es empate
    if (checkWinner(newGrid)) {
      return false;
    }

    
    
    // Si todas las celdas están llenas y no hay ganador → empate
    setWinner("Draw")

    
  }

  const handleReset = () => {
    setGrid(['O','','','O','','','','',''])
    setTurn('X')
    setWinner(false)
  }

  return (
    <>
      {winner === false &&
          <h1>Player's <span className='player'>{turn}</span> Turn</h1>
        }
      
      {
        makeWinner(winner)
      }
      <div className='grid'> 
        {
          grid.map((element, i) => {
            return (
              <Cell 
              disabled={winner === false ? true : false}
              key={i} onCellClick={handleCellClick} setGrid={setGrid} setTurn={setTurn} turn={turn} cellId={i} grid={grid}>{grid[i]}</Cell>
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
