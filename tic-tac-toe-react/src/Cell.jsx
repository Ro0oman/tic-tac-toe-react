
export function Cell({cellId, grid}){
    return(
        <div className='box'>
          <button className='cell'> {cellId}{grid[cellId]}</button>
        </div>
    )
}