// Mutable
const fruits = ['manzana', 'piña']
fruits.push('fresa')
fruits.shift()
console.log(fruits)

// Inmutablidad
const newFruits = [...fruits, 'pera']
console.log(fruits, newFruits)

const numbers = [1, 2, 3, 4]
const doubleNumbers = numbers.map((number) => {
  return number * 2
})
console.log(numbers, doubleNumbers)
