class Vehiculo {
  constructor(id, placa, color, modelo, marca, tipo, USUARIO_id_usuario) {
    this.id = id;
    this.placa = placa;
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.tipo = tipo;
    this.USUARIO_id_usuario = USUARIO_id_usuario;
  }

  // Getters
  get getid() {
    return this.id;
  }

  get getplaca() {
    return this.placa;
  }

  get getcolor() {
    return this.color;
  }

  get getmodelo() {
    return this.modelo;
  }

  get getmarca() {
    return this.marca;
  }

  get gettipo() {
    return this.tipo;
  }

  get getUSUARIO_id_usuario() {
    return this.USUARIO_id_usuario;
  }

  // Setters
  set setid(id) {
    this.id = id;
  }

  set setplaca(placa) {
    this.placa = placa;
  }

  set setcolor(color) {
    this.color = color;
  }

  set setmodelo(modelo) {
    this.modelo = modelo;
  }

  set setmarca(marca) {
    this.marca = marca;
  }

  set settipo(tipo) {
    this.tipo = tipo;
  }

  set setUSUARIO_id_usuario(USUARIO_id_usuario) {
    this.USUARIO_id_usuario = USUARIO_id_usuario;
  }

  registrarVehiculo(vehiculo) {

  }

  actualizarVehiculo(vehiculo) {
    
  }

  reasignarVehiculo(usuario, vehiculo) {
    
  }

  crearRestriccionPicoPlaca(restriccion) {
    
  }
}

export default Vehiculo;
