import React from 'react'

function PrevButton({prev, onPrevious}) {

const handlePrevPage = () => {onPrevious()

}


  return (
    <button onClick={handlePrevPage} disabled={!prev}>Previous</button>
    
  )
}

export default PrevButton