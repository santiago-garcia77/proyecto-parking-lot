class ReporteEntradas {
    constructor() {}

    // Método para listar entradas de vehículos
    listarEntradas(entradas) {
        console.log("📥 Reporte de Entradas:");
        entradas.forEach(entrada => {
            console.log(`Vehículo ID: ${entrada.VEHICULO_id} - Celda ID: ${entrada.CELDA_id} - Fecha/Hora: ${entrada.fecha_hora}`);
        });
    }
}

export default ReporteEntradas;
