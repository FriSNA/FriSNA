// Comparación de valores
console.log(1 == '1')
console.log(1 === '1')
console.log(0 == false)

// Truthy
console.log(!!' ')
console.log(Boolean(-1))
console.log(!!Symbol(0))
console.log(!!{})
console.log(!![])

// Falsy
console.log(!!'')
console.log(!!0)
console.log(!!undefined)
console.log(!!null)
console.log(!!NaN)