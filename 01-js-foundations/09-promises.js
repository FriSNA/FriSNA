const pokemons = [
  {
    number: 1,
    name: 'Bulbasaur',
  },
  {
    number: 2,
    name: 'Ivysaur',
  },
  {
    number: 3,
    name: 'Venusaur',
  },
];

const getPokemonByNumber = (number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const pokemonSelected = pokemons.find((pokemon) => pokemon.number === number)
    if (pokemonSelected) {
      resolve(pokemonSelected)
    } else {
      reject('Pokemon no encontrado')
    }
  }, 3000)
})

// const bulbasaur = getPokemonByNumber(1)
// setTimeout(() => {
//   console.log(bulbasaur)
// }, 6000)

getPokemonByNumber(1).then((pokemon) => {
  console.log(pokemon)
}).catch((error) => {
  console.log(error)
}).finally(() => {console.log('No me importa si recibo un pokemon o no')})
