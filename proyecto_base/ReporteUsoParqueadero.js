class ReporteUsoParqueadero {
    constructor() {}

    // REQ-REP-09: Listar vehículos que más usan el parqueadero
    listarVehiculosFrecuentes(historialParqueo) {
        console.log("🚗 Vehículos que más usan el parqueadero:");
        const conteo = {};

        historialParqueo.forEach(registro => {
            conteo[registro.vehiculo] = (conteo[registro.vehiculo] || 0) + 1;
        });

        Object.entries(conteo)
            .sort((a, b) => b[1] - a[1]) // ordenar de mayor a menor
            .forEach(([vehiculo, veces]) => {
                console.log(`Vehículo: ${vehiculo} - Ingresos: ${veces}`);
            });
    }

    // REQ-REP-10: Listar días y horas de mayor ocupación
    listarHorasPico(historialParqueo) {
        console.log("⏰ Días y horas de mayor ocupación:");
        const conteo = {};

        historialParqueo.forEach(registro => {
            const clave = `${registro.dia} ${registro.hora}`;
            conteo[clave] = (conteo[clave] || 0) + 1;
        });

        Object.entries(conteo)
            .sort((a, b) => b[1] - a[1]) // ordenar por mayor frecuencia
            .slice(0, 5) // mostrar las 5 más concurridas
            .forEach(([momento, veces]) => {
                console.log(`${momento} - ${veces} vehículos`);
            });
    }
}

export default ReporteUsoParqueadero;
