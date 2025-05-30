function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
  return a / b;
}

module.exports = dividir;