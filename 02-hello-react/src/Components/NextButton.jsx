import React from 'react'
function NextButton({next, onNext}) {
const handleNextPage = () => {
onNext();
}
return (
    next ?
<button onClick={handleNextPage}>Next</button>
:
null
)
}

export default NextButton