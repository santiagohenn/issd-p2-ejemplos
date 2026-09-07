// ADAPTER (ADAPTADOR)
// Convierte una interfaz existente en la que necesita nuestro código.
class ServicioExternoTemperatura {
  obtenerTemperatura() {
    return { gradosCelsius: 22 };
  }
}

class AdaptadorClima {
  constructor(servicioExterno) {
    this.servicioExterno = servicioExterno;
  }

  // La aplicación usa "temperatura", aunque el servicio externo use otro nombre.
  consultar() {
    const respuesta = this.servicioExterno.obtenerTemperatura();
    return { temperatura: respuesta.gradosCelsius };
  }
}

const clima = new AdaptadorClima(new ServicioExternoTemperatura());
console.log(clima.consultar()); // { temperatura: 22 }

module.exports = AdaptadorClima;
