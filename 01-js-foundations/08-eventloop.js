function eventloop2() {
  setTimeout(() => {
    console.log('Hola futuro 2')
  }, 0)
}

function eventloop() {
  setTimeout(() => {
    console.log('Hola futuro 1')
  }, 0)
  console.log('Hola presente 1')
  console.log('Hola presente 2')
  console.log('Hola presente 3')
  console.log('Hola presente 4')
  console.log('Hola presente 5')
  console.log('Hola presente 6')
  console.log('Hola presente 7')
  eventloop2()
}

eventloop()