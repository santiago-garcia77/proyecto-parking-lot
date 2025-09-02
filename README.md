# Parking Lot System

**Autor:** Santiago Garcia

Este proyecto implementa un **sistema de parqueadero** que permite la gestión de usuarios, vehículos, accesos, salidas, incidencias, celdas de parqueo y reportes. Está diseñado para ser usado por **administradores, operadores y usuarios**, cada uno con diferentes niveles de acceso y permisos.

---

## 📹 Video de explicación
Puedes ver la explicación completa del proyecto en el siguiente enlace:  
[Explicación del proyecto](https://youtu.be/2d6LzAxyM3E)

---

## 📝 Requerimientos del sistema

### Requerimientos de usuario
- **REQ-USR-1:** Solo existen 3 perfiles iniciales: Administrador, Operador y Usuario.
- **REQ-USR-2:** Administrador y operadores pueden crear usuarios con datos obligatorios como tipo de documento, número, nombre completo, correo electrónico, celular, y opcionalmente fotografía y tipo de usuario. Se genera un código único autoincremental.
- **REQ-USR-3:** Solo el administrador puede cambiar el estado de un usuario de activo a inactivo.
- **REQ-USR-4:** Los usuarios pueden actualizar sus datos personales, notificando al administrador.
- **REQ-USR-5:** El administrador puede actualizar cualquier dato de los usuarios.
- **REQ-USR-6:** Administrador y operador pueden asignar vehículos a usuarios.
- **REQ-USR-7:** Administradores y operadores acceden con documento y contraseña.
- **REQ-USR-8:** Usuarios registrados acceden solo con número de documento.

### Requerimientos de vehículo
- **REQ-CAR-1:** Administrador y operador pueden crear vehículos (placa, color, marca, modelo).
- **REQ-CAR-2:** Solo el administrador puede actualizar vehículos.
- **REQ-CAR-3:** Solo el administrador puede reasignar un vehículo a otro usuario.
- **REQ-CAR-4:** Administrador y operador pueden crear tabla de restricciones por día (pico y placa).

### Requerimientos de accesos y salidas
- **REQ-INEX-1:** Registrar entrada de vehículo con puerta, placa, fecha y hora.
- **REQ-INEX-2:** Registrar salida de vehículo con puerta, placa, fecha y hora.
- **REQ-INEX-3:** Contar el tiempo de permanencia de cada vehículo.
- **REQ-INEX-4:** Denegar entrada si incumple restricciones de pico y placa.

### Requerimientos de incidencias
- **REQ-INCD-1:** Registrar incidencias (rayones, choques, golpes, atropellamientos) con código único, vehículo afectado, fecha, hora y tipo de incidencia.

### Requerimientos de celdas de parqueo
- **REQ-CLD-01:** Visualizar todas las celdas por área, piso o nivel, indicando estado, código, tipo de celda y área.
- **REQ-CLD-02:** Los usuarios pueden visualizar sus celdas disponibles y ocupadas mediante su cuenta.
- **REQ-CLD-03:** Actualizar el estado de la celda (ocupada/disponible) y asociar vehículo cuando esté ocupada.

### Requerimientos de reportes y consultas
- **REQ-REP-01 a REQ-REP-10:** Solo el administrador puede generar reportes de usuarios, vehículos, accesos, incidencias, restricciones, ocupación de celdas y análisis de uso del parqueadero.

---

## ⚙️ Funcionalidades principales
1. Gestión de **usuarios** con distintos roles y permisos.
2. Gestión de **vehículos** y asignación a usuarios.
3. Registro de **entradas y salidas** con control de tiempo.
4. Control de **restricciones de pico y placa**.
5. Registro de **incidencias** dentro del parqueadero.
6. Visualización y gestión de **celdas de parqueo**.
7. Generación de **reportes y estadísticas** de uso y ocupación del parqueadero.

---

## 📁 Estructura del proyecto
- `/src` - Código fuente del sistema.
- `/assets` - Recursos como imágenes o fotos de usuarios/vehículos.
- `/docs` - Documentación adicional.
- `README.md` - Información general del proyecto.

---

## 👥 Usuarios
- **Administrador:** Acceso completo al sistema y reportes.
- **Operador:** Gestiona usuarios y vehículos, registra entradas y salidas.
- **Usuario:** Acceso limitado a su información y visualización de celdas.

---

## 🚀 Cómo usar
1. Iniciar sesión según el tipo de usuario.
2. Crear usuarios y vehículos según permisos.
3. Registrar entradas y salidas de vehículos.
4. Visualizar celdas disponibles y ocupadas.
5. Generar reportes si se tiene perfil de administrador.

---

## 📌 Notas
- Cada usuario y vehículo tiene un **código único autoincremental**.
- Se mantiene registro de **fecha y hora** en todas las acciones relevantes.
- El sistema respeta **restricciones de acceso** según perfil y pico y placa.

---

**Autor:** Santiago Garcia
