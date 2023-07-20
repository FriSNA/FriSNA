// Async Function

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


async function getPokemon() {
  try {
    const pokemon = await getPokemonByNumber(10)
    const { name } = pokemon
    console.log(name)
  } catch (error) {
    console.log(error)
  }
  console.log('No me importa si recibo un pokemon o no')
}

getPokemon()