class Celda {
  constructor(id, tipo, estado) {
    this.id = id;
    this.tipo = tipo;
    this.estado = estado;
  }

  // Getters
  get getId() {
    return this.id;
  }

  get getTipo() {
    return this.tipo;
  }

  get getEstado() {
    return this.estado;
  }

  // Setters
  set setId(id) {
    this.id = id;
  }

  set setTipo(tipo) {
    this.tipo = tipo;
  }

  set setEstado(estado) {
    this.estado = estado;
  }

  visualizarCeldas() {
    
  }

  actualizarEstadoCelda(estado) {
    
  }

  asociarVehiculo(vehiculo) {
  
  }
}

export default Celda;

