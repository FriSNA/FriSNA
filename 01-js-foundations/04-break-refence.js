// Spread operator
const address = {
  street: 'Avenida Patriotismo',
  numExt: 48,
  suburb: { id: 1, name: 'Escandón' }
}

const addressCopy = {...address, city: 'Ciudad de México'}
console.log(address === addressCopy)
console.log(addressCopy)
addressCopy.numExt = 52
addressCopy.suburb.id = 2
console.log(address, addressCopy)

const addressCopyJSON = JSON.parse(JSON.stringify(address))
console.log(addressCopyJSON)
addressCopyJSON.suburb.id = 3
console.log(address, addressCopyJSON)

// structuredClone
const addressClone = structuredClone(address)
addressClone.suburb.name = 'Condesa'
console.log(address, addressClone)

const fruits = ['manzana', 'pera', 'piña'];
const fruitsCopy = [...fruits]
const fruitsClone = structuredClone(fruits)
console.log(fruitsCopy, fruitsClone)
