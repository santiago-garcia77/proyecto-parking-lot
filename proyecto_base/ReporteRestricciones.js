class ReporteRestricciones {
    constructor() {}

    // Método para listar vehículos restringidos en un día específico
    listarVehiculosRestringidos(vehiculos, picoPlaca, dia) {
        console.log(`🚫 Vehículos restringidos el día ${dia}:`);
        vehiculos.forEach(vehiculo => {
            const restriccion = picoPlaca.find(r => r.dia === dia && r.numero === vehiculo.placa.slice(-1));
            if (restriccion) {
                console.log(`Placa: ${vehiculo.placa} - Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo}`);
            }
        });
    }
}

export default ReporteRestricciones;
