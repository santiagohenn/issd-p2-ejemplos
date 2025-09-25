class CrearUsuario {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    ejecutar(usuarioData) {
        const usuario = new Usuario(usuarioData.id, usuarioData.nombre,
            usuarioData.email);
        return this.usuarioRepository.guardar(usuario);
    }
}

class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    // Método que define una regla de negocio
    actualizarEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }
}

module.exports = { CrearUsuario, Usuario };