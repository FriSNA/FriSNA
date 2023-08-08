import React from 'react'
import Button from '@mui/material/Button'

function PrevButton({prev, onPrevious}) {

const handlePrevPage = () => {onPrevious()

}


  return (
    <span style={{cursor:'not-allowed'}}><Button    size={'large'} variant='contained'color='secondary' onClick={handlePrevPage} disabled={!prev}>Previous</Button>

    </span>
  )
}

export default PrevButton