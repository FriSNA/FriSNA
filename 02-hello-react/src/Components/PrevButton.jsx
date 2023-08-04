import React from 'react'

function PrevButton({prev, onPrevious}) {

const handlePrevPage = () => {}
onPrevious();

  return (
    prev ?
    <button onClick={handlePrevPage}>Previous</button>
    :
    null
  )
}

export default PrevButton