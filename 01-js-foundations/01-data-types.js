// Data Types https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures

// Pritives

// boolean
var isLoading = true
console.log('isLoading type:', typeof isLoading) // boolean

// string
var codeLanguage = 'JavaScript'
var codeLanguageCopy = codeLanguage
codeLanguage = 'JS'
console.log('codeLanguage:', codeLanguage)
console.log('codeLanguageCopy:', codeLanguageCopy)

// number 9007199254740991
var currentYear = 2023
console.log('currentYear type:', typeof currentYear)

// bigint
var bigNumber = 9007199254740999n
console.log(bigNumber)
console.log('bigNumber type:', typeof bigNumber)

// undefined
var notInitialized
console.log('notInitialized type:', typeof notInitialized)

// symbol
var symbolValue = Symbol('valor')
var symbolValueCopy = Symbol('valor')
console.log(symbolValue == symbolValueCopy)

// null https://2ality.com/2013/10/typeof-null.html
var withoutValue = null
console.log('withoutValue type:', typeof withoutValue)


// Objects

// Literal Object
var addres = {
  street: 'Avenida Patriotismo',
  number: 48,
  suburb: 'Escandón'
}

console.log('addres type:', typeof addres)

var addresCopy = addres

addresCopy.street = 'Progreso'

console.log(addres === addresCopy)
console.log(addres.street, addresCopy.street)

// arrays
const fruits = ['manzana', 'platano', 'piña']
const fruitsCopy = fruits
fruits[0] = 'pera'
console.log(fruitsCopy[0])
console.log('fruis type:', typeof fruits)
fruits.push('sandía')
console.log(fruitsCopy)

