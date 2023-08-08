import React from 'react'
import Button from '@mui/material/Button'



function NextButton({next, onNext}) {
const handleNextPage = () => {
onNext();
}
return (
    //Si next no tiene ningún valor, se deshabilita el botón. 
    <span style={{cursor:'not-allowed'}}>
<Button   size={'medium'}  variant='contained' color='success' onClick={handleNextPage} disabled={!next}>Next</Button> </span>
)
}

export default NextButton