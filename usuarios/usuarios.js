
module.exports = {
  getUsuarioSync(id) {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
      // Esperando...
    }

    return {
      id,
      nombre: `Usuario ${id}`
    };
  },

  getUsuario(id, callback) {
    const usuario = {
      id,
      nombre: `Usuario ${id}`
    };

    setTimeout(() => {
      callback(usuario);
    }, 3000);
  }
}

