// MODULE (MÓDULO)
// Las variables privadas viven dentro del módulo y solo exportamos lo necesario.
let contador = 0;

function incrementar() {
  contador += 1;
  return contador;
}

function obtenerValor() {
  return contador;
}

// Otros archivos pueden usar estas funciones con require('./modulo').
module.exports = { incrementar, obtenerValor };
