class AccesoSalidas {
  constructor(id, movimiento, fecha_hora, puerta, tiempo_estadia, VEHICULO_id) {
    this.id = id;
    this.movimiento = movimiento;
    this.fecha_hora = fecha_hora;
    this.puerta = puerta;
    this.tiempo_estadia = tiempo_estadia;
    this.VEHICULO_id = VEHICULO_id;
  }

  // Getters
  get getid() {
    return this.id;
  }

  get getmovimiento() {
    return this.movimiento;
  }

  get getFechaHora() {
    return this.fecha_hora;
  }

  get getPuerta() {
    return this.puerta;
  }

  get gettiempo_estadia() {
    return this.tiempo_estadia;
  }

  get getVEHICULO_id() {
    return this.VEHICULO_id;
  }

  // Setters
  set setid(id) {
    this.id = id;
  }

  set setmovimiento(movimiento) {
    this.movimiento = movimiento;
  }

  set setFechaHora(fecha_hora) {
    this.fecha_hora = fecha_hora;
  }

  set setPuerta(puerta) {
    this.puerta = puerta;
  }

  set settiempo_estadia(tiempo_estadia) {
    this.tiempo_estadia = tiempo_estadia;
  }

  set setVEHICULO_id(VEHICULO_id) {
    this.VEHICULO_id = VEHICULO_id;
  }

  registrarEntrada(vehiculo, puerta, fechaHora) {

  }

  registrarSalida(vehiculo, puerta, fechaHora) {
   
  }

  calcularTiempoEstadia(vehiculo) {
    
  }

  validarRestriccionPicoPlaca(vehiculo, fechaHora) {
    
  }
}

export default AccesoSalidas;

