class Incidencia {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  // Getters
  get getid() {
    return this.id;
  }

  get getnombre() {
    return this.nombre;
  }

  // Setters
  set setid(id) {
    this.id = id;
  }

  set setnombre(nombre) {
    this.nombre = nombre;
  }

  registrarIncidencia(vehiculo, tipo, fechaHora) {
   
  }
}

export default Incidencia;
