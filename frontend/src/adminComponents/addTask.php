<?php
include("connection.php");

// Recibir datos del formulario
$nombre_tarea = $_POST['nombre_tarea'];
$projectID = $_POST['projectID'];
$colaboradores = $_POST['colaboradores'];
$progreso = $_POST['progreso'];
$anexos = $_POST['anexos'];

// Insertar datos en la base de datos
$sql = "INSERT INTO tareas (projectID, nombre_tarea, colaboradores, progreso, anexos) VALUES ('$projectID', '$nombre_tarea', '$colaboradores', '$progreso', '$anexos')";

if ($conn->query($sql) === TRUE) {
    // Mostrar mensaje de alerta en el navegador
    echo '<script>alert("Datos guardados correctamente");</script>';
    // Recargar la página adminProjects.html
    echo '<script>window.location.href = "adminTask.html";</script>';
} else {
    echo "Error al guardar datos: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
