
export function Cell({cellId, grid, setGrid, turn, setTurn, onCellClick}){



    const handleClick = () => {
        if(grid[cellId] === '')
            {
            const newGrid = [...grid]
            // Modificas la copia, no el original
            newGrid[cellId] = turn
            // Actualizas el estado con la copia modificada
            setGrid(newGrid)
            if(turn === 'X')
            {
                setTurn('O')
            }
            else{
                setTurn('X')
            }
            onCellClick(cellId); // <- ejecuta la función del padre

                
        }
    }

    return(
        <div className='box'>
          <button className='cell' onClick={handleClick}> {grid[cellId]}</button>
        </div>
    )
}