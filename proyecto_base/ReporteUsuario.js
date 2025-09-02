class ReporteUsuario {
    constructor() {}

    // Método para listar usuarios
    listarUsuarios(usuarios) {
        console.log("📋 Reporte de Usuarios:");
        usuarios.forEach(usuario => {
            console.log(`ID: ${usuario.id} - Nombre: ${usuario.nombre} ${usuario.apellido} - Perfil: ${usuario.perfil}`);
        });
    }
}

export default ReporteUsuario;
