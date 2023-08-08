import React from 'react'


function NextButton({next, onNext}) {
const handleNextPage = () => {
onNext();
}
return (
    //Si next no tiene ningún valor, se deshabilita el botón. 
<button onClick={handleNextPage} disabled={!next}>Next</button>
)
}

export default NextButton