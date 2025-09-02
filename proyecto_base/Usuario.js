class Usuario {
  constructor(id_usuario, tipo_documento, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion_correo, numero_celular, foto_perfil, estado, clave,  perfilUsuario) {
    this.id_usuario = id_usuario;
    this.tipo_documento = tipo_documento;
    this.numero_documento = numero_documento;
    this.primer_nombre = primer_nombre;
    this.segundo_nombre = segundo_nombre;
    this.primer_apellido = primer_apellido;
    this.segundo_apellido = segundo_apellido;
    this.direccion_correo = direccion_correo;
    this.numero_celular = numero_celular;
    this.foto_perfil = foto_perfil;
    this.estado = estado;
    this.clave = clave;
    this.perfilUsuario = perfilUsuario;
  }

  // Getters
  get getIdUsuario() {
    return this.id_usuario;
  }

  get gettipo_documento() {
    return this.tipo_documento;
  }

  get getnumero_documento() {
    return this.numero_documento;
  }

  get getprimer_nombre() {
    return this.primer_nombre;
  }

  get getsegundo_nombre() {
    return this.segundo_nombre;
  }

  get getprimer_apellido() {
    return this.primer_apellido;
  }

  get getsegundo_apellido() {
    return this.segundo_apellido;
  }

  get getdireccion_correo() {
    return this.direccion_correo;
  }

  get getnumero_celular() {
    return this.numero_celular;
  }

  get getfoto_perfil() {
    return this.foto_perfil;
  }

  get getestado() {
    return this.estado;
  }

  get getclave() {
    return this.clave;
  }

  get getPerfilUsuario() {
    return this.perfilUsuario;
  }



  // Setters
  set setid_usuario(id_usuario) {
    this.id_usuario = id_usuario;
  }

  set settipo_documento(tipo_documento) {
    this.tipo_documento = tipo_documento;
  }

  set setnumero_documento(numero_documento) {
    this.numero_documento = numero_documento;
  }

  set setprimer_nombre(primer_nombre) {
    this.primer_nombre = primer_nombre;
  }

  set setsegundo_nombre(segundo_nombre) {
    this.segundo_nombre = segundo_nombre;
  }

  set setprimer_apellido(primer_apellido) {
    this.primer_apellido = primer_apellido;
  }

  set setsegundo_apellido(segundo_apellido) {
    this.segundo_apellido = segundo_apellido;
  }

  set setdireccion_correo(direccion_correo) {
    this.direccion_correo = direccion_correo;
  }

  set setnumero_celular(numero_celular) {
    this.numero_celular = numero_celular;
  }

  set setfoto_perfil(foto_perfil) {
    this.foto_perfil = foto_perfil;
  }

  set setestado(estado) {
    this.estado = estado;
  }

  set setclave(clave) {
    this.clave = clave;
  }

  set setPerfilUsuario(perfilUsuario) {
  this.perfilUsuario = perfilUsuario;
}

  registrarUsuario(usuario){

  }

  actualizarUsuario(usuario){

  }

  borrarUsuario(usuario){

  }

  asignarVehiculoUsuario(usuario, vehiculo){

  }
}

export default Usuario;

