class HistorialParqueo {
  constructor(CELDA_id, VEHICULO_id, fecha_hora) {
    this.CELDA_id = CELDA_id;
    this.VEHICULO_id = VEHICULO_id;
    this.fecha_hora = fecha_hora;
  }

  // Getters
  get getCELDA_id() {
    return this.CELDA_id;
  }

  get getVEHICULO_id() {
    return this.VEHICULO_id;
  }

  get getfecha_hora() {
    return this.fecha_hora;
  }

  // Setters
  set setCELDA_id(CELDA_id) {
    this.CELDA_id = CELDA_id;
  }

  set setVEHICULO_id(VEHICULO_id) {
    this.VEHICULO_id = VEHICULO_id;
  }

  set setfecha_hora(fecha_hora) {
    this.fecha_hora = fecha_hora;
  }

  listarEntradas() {
   
  }

  listarSalidas() {
    
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

export default HistorialParqueo;
