class ReporteIncidencia {
  constructor(VEHICULO_id, INCIDENCIA_id, fecha_hora) {
    this.VEHICULO_id = VEHICULO_id;
    this.INCIDENCIA_id = INCIDENCIA_id;
    this.fecha_hora = fecha_hora;
  }

  // Getters
  get getVEHICULO_ID() {
    return this.VEHICULO_id;
  }

  get getINCIDENCIA_ID() {
    return this.INCIDENCIA_id;
  }

  get getfecha_Hora() {
    return this.fecha_hora;
  }

  // Setters
  set setVEHICULO_ID(VEHICULO_id) {
    this.VEHICULO_id = VEHICULO_id;
  }

  set setINCIDENCIA_ID(INCIDENCIA_id) {
    this.INCIDENCIA_id = INCIDENCIA_id;
  }

  set setfecha_Hora(fecha_hora) {
    this.fecha_hora = fecha_hora;
  }

  
  listarUsuarios() {
    
  }

  listarVehiculos() {
    
  }

  listarEntradas() {
    
  }

  listarSalidas() {
    
  }

  listarIncidencias() {
    
  }

  listarVehiculosRestringidos(dia) {
    
  }

  listarCeldasOcupadas(dia) {
    
  }

  listarCeldasMasUsadas(periodo) {
    
  }

  listarVehiculosFrecuentes() {
    
  }

  listarHorasPico() {
    
  }
}

export default ReporteIncidencia;
