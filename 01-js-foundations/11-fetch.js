// fetch('https://rickandmortyapi.com/api/character')
//   .then((response) => {
//     return response.json()
//   }).then((json) => {
//     console.log(json)
//   })

const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const json = await response.json()
  console.log(json)
}

getCharacters()
