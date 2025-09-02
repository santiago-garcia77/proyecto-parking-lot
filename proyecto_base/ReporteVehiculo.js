class ReporteVehiculo {
    constructor() {}

    // Método para listar vehículos
    listarVehiculos(vehiculos) {
        console.log("🚗 Reporte de Vehículos:");
        vehiculos.forEach(vehiculo => {
            console.log(`ID: ${vehiculo.id} - Placa: ${vehiculo.placa} - Tipo: ${vehiculo.tipo}`);
        });
    }
}

export default ReporteVehiculo;
