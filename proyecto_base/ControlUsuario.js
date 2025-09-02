import Usuario from "./Usuario.js";
import PerfilUsuario from "./PerfilUsuario.js";

class GestionUsuarios {
  constructor() {
    this.listaUsuarios = [];
    this.listaPerfiles = [];
  }

  // Métodos para manejar perfiles
  agregarPerfil(perfil) {}
  buscarPerfil(id) {}
  modificarPerfil(id, perfilNuevo) {}
  borrarPerfil(id) {}

  // Métodos para manejar usuarios
  agregarUsuario(usuario) {}
  buscarUsuario(id) {}
  modificarUsuario(id, usuarioNuevo) {}
  borrarUsuario(id) {}

  // Métodos extra: listar
  mostrarUsuarios() {}
  mostrarPerfiles() {}
}

// Instancia principal
const gestor = new GestionUsuarios();

// Crear perfiles de ejemplo
const perfilA = new PerfilUsuario(1, "Administrador");
const perfilB = new PerfilUsuario(2, "Editor");
const perfilC = new PerfilUsuario(3, "Invitado");

gestor.listaPerfiles.push(perfilA, perfilB, perfilC);

console.log(perfilA);
console.log(perfilB);
console.log(perfilC);

// Crear usuarios de ejemplo
const usuarioA = new Usuario(
  1, "CC", "100200300", "Camilo", "Andrés", "Gómez", "Martínez",
  "camilo.gomez@gmail.com", "3201234567", "fotoA.jpg", "Activo", "clave123", perfilA.id
);

const usuarioB = new Usuario(
  2, "TI", "200300400", "Diana", "Carolina", "Rodríguez", "López",
  "diana.rodriguez@gmail.com", "3217654321", "fotoB.jpg", "Inactivo", "clave456", perfilB.id
);

const usuarioC = new Usuario(
  3, "CC", "300400500", "Esteban", "", "Fernández", "Quintero",
  "esteban.fernandez@gmail.com", "3229876543", "fotoC.jpg", "Activo", "clave789", perfilC.id
);

gestor.listaUsuarios.push(usuarioA, usuarioB, usuarioC);

console.log(usuarioA);
console.log(usuarioB);
console.log(usuarioC);

export default GestionUsuarios;
