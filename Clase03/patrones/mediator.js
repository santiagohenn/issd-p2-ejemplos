// MEDIATOR (MEDIADOR)
// Un objeto central coordina la comunicación entre otros objetos.
class Chat {
  enviar(mensaje, remitente) {
    console.log(`${remitente.nombre} dice: ${mensaje}`);
  }
}

class Usuario {
  constructor(nombre, chat) {
    this.nombre = nombre;
    this.chat = chat;
  }

  enviar(mensaje) {
    this.chat.enviar(mensaje, this);
  }
}

const chat = new Chat();
const ana = new Usuario('Ana', chat);
ana.enviar('Hola equipo');

module.exports = { Chat, Usuario };
