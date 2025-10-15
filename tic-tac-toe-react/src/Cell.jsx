
export function Cell({cellId, grid, setGrid, turn}){

    const handleClick = () => {
        if(grid[cellId] === '')
            {const newGrid = [...grid]
            // Modificas la copia, no el original
            newGrid[cellId] = turn
            // Actualizas el estado con la copia modificada
            setGrid(newGrid)
        }
    }

    return(
        <div className='box'>
          <button className='cell' onClick={handleClick}> {grid[cellId]}</button>
        </div>
    )
}