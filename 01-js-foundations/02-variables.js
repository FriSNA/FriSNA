// Variables

// Scope
// global, function, block

// var
// Scope global o function
// Se puede re inicializar
// Se puede re asiginar
function sayHello() {
  if (true) {
    var name = 'Eduardo'
    var name = 'Fernando'
    name = 'Evelyn'
  }
  console.log('name value:', name)
}
sayHello()

// let
// Scope block
// No se puede re inicializar
// Se puede re asignar
let currentYear = 2022
currentYear = 2023
console.log('currentYear value:', currentYear)

function getYear() {
  if (true) {
    let year = 2023
    console.log('year value:', year)
  }
}
getYear()

// const
// Scope block
// No se puede re inicializar
// No se puede re asignar

const currentMonth = 'julio'

const address = {
  street: 'Avenida Patriotismo',
  number: 48,
  suburb: 'Escandón'
}

Object.freeze(address)

address.city = 'Ciudad de México'
address.number = 97

console.log(address)
