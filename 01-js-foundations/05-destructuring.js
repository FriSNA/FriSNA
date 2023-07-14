// Literal Objects desctructuring
const address = {
  street: 'Avenida Patriotismo',
  number: 48,
  suburb: {id: 1, name: 'Escandón'}
}

console.log(address.street)

const { street, number, suburb: { id, name  } } = address

console.log(address)

console.log(id, name, street, number)

// Array Destructuring
const fruits = ['manzana', 'piña', 'pera']
const [,,third] = fruits

console.log(third)