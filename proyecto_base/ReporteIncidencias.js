class ReporteIncidencias {
    constructor() {}

    // Método para listar incidencias
    listarIncidencias(incidencias) {
        console.log("🚨 Reporte de Incidencias:");
        incidencias.forEach(incidencia => {
            console.log(`Código: ${incidencia.codigo} - Vehículo ID: ${incidencia.VEHICULO_id} - Tipo: ${incidencia.tipo} - Fecha/Hora: ${incidencia.fecha_hora}`);
        });
    }
}

export default ReporteIncidencias;
