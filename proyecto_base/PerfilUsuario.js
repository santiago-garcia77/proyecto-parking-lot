class PerfilUsuario {
  constructor(id, perfil) {
    this.id = id;
    this.perfil = perfil;
  }

  // Getters
  get getid() {
    return this.id;
  }

  get getperfil() {
    return this.perfil;
  }

  // Setters
  set setid(id) {
    this.id = id;
  }

  set setperfil(perfil) {
    this.perfil = perfil;
  }

  crearUsuario(usuario) {
    
  }

  listarUsuarios() {
 
  }

  editarUsuario(id, nuevosDatos) {
   
  }

  eliminarUsuario(id) {
    
  }
}

export default PerfilUsuario;
