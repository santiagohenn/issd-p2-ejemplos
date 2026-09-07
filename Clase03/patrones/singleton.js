// SINGLETON
// Garantiza que exista una sola instancia de una clase.
// Es útil, por ejemplo, para una configuración compartida.
class Configuracion {
  constructor() {
    if (Configuracion.instancia) {
      return Configuracion.instancia;
    }

    this.nombreAplicacion = 'Mi servidor';
    Configuracion.instancia = this;
  }
}

const configuracion1 = new Configuracion();
const configuracion2 = new Configuracion();

console.log(configuracion1 === configuracion2); // true: es el mismo objeto.

module.exports = Configuracion;
