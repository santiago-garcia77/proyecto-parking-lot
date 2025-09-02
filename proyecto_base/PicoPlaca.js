class PicoPlaca {
  constructor(id, tipo_vehiculo, numero, dia) {
    this.id = id;
    this.tipo_vehiculo = tipo_vehiculo;
    this.numero = numero;
    this.dia = dia;
  }

  // Getters
  get getid() {
    return this.id;
  }

  get gettipo_vehiculo() {
    return this.tipo_vehiculo;
  }

  get getnumero() {
    return this.numero;
  }

  get getdia() {
    return this.dia;
  }

  // Setters
  set setid(id) {
    this.id = id;
  }

  set settipo_vehiculo(tipo_vehiculo) {
    this.tipo_vehiculo = tipo_vehiculo;
  }

  set setnumero(numero) {
    this.numero = numero;
  }

  set setdia(dia) {
    this.dia = dia;
  }

  listarRestricciones() {
    
  }

  verificarRestriccion(vehiculo) {
    
  }

  listarVehiculosRestringidos(dia) {
   
  }
}

export default PicoPlaca;
