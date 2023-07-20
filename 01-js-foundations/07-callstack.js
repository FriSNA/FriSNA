function obtenerSaludo(nombre) {
  return `Hola ${nombre}`
}

function saludar(nombre) {
  const saludo = obtenerSaludo(nombre)
  console.log(saludo)
}

saludar('Miguel')
