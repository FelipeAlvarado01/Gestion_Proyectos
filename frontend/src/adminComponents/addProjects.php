<?php
include("connection.php");

// Recibir datos del formulario
$nombre_proyecto = $_POST['nombre_proyecto'];
$anio = $_POST['anio'];
$clasificacion = $_POST['clasificacion'];
$fecha_inicio = $_POST['fecha_inicio'];
$fecha_final = $_POST['fecha_final'];
$progreso = $_POST['progreso'];
$usuarioID = $_POST['usuarioID'];

// Insertar datos en la base de datos
$sql = "INSERT INTO proyectos (nombre_proyecto, anio, clasificacion,fecha_inicio, fecha_final, progreso, usuarioID) VALUES ('$nombre_proyecto', '$anio', '$clasificacion','$fecha_inicio','$fecha_final', '$progreso', '$usuarioID')";

if ($conn->query($sql) === TRUE) {
    // Mostrar mensaje de alerta en el navegador
    echo '<script>alert("Datos guardados correctamente");</script>';
    // Recargar la página adminProjects.html
    echo '<script>window.location.href = "adminProjects.html?clasificacion=' . $clasificacion . '";</script>';
} else {
    echo "Error al guardar datos: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
