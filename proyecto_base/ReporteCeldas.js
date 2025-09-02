class ReporteCeldas {
    constructor() {}

    // REQ-REP-07: Listar total de celdas ocupadas en un día
    listarCeldasOcupadas(celdas, dia) {
        const ocupadas = celdas.filter(celda => celda.estado === "ocupado" && celda.fecha === dia);
        console.log(`📅 Total de celdas ocupadas el ${dia}: ${ocupadas.length}`);
        ocupadas.forEach(celda => {
            console.log(`Celda: ${celda.codigo} - Tipo: ${celda.tipo} - Vehículo: ${celda.vehiculo}`);
        });
    }

    // REQ-REP-08: Listar celdas más usadas en un rango de fechas
    listarCeldasMasUsadas(historialCeldas, fechaInicio, fechaFin) {
        console.log(`📊 Celdas más usadas entre ${fechaInicio} y ${fechaFin}:`);
        const conteo = {};

        historialCeldas.forEach(registro => {
            if (registro.fecha >= fechaInicio && registro.fecha <= fechaFin) {
                conteo[registro.celda] = (conteo[registro.celda] || 0) + 1;
            }
        });

        Object.entries(conteo).forEach(([celda, veces]) => {
            console.log(`Celda: ${celda} - Usada ${veces} veces`);
        });
    }
}

export default ReporteCeldas;
