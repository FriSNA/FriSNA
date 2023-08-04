import React from 'react'

function Character({characters}) {
  return (
    <div>
    <img src={characters.image} alt={characters.name} ></img>
    <h2><b>{characters.name}</b></h2>
    </div>
  )
}
export default Character