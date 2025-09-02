class ReporteSalidas {
    constructor() {}

    // Método para listar salidas de vehículos
    listarSalidas(salidas) {
        console.log("📤 Reporte de Salidas:");
        salidas.forEach(salida => {
            console.log(`Vehículo ID: ${salida.VEHICULO_id} - Celda ID: ${salida.CELDA_id} - Fecha/Hora: ${salida.fecha_hora}`);
        });
    }
}

export default ReporteSalidas;
