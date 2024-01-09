<<?php
include("connection.php");
  // Recibir datos del formulario
  $nombre_proyecto = $_POST['nombre_proyecto'];
  $anio = $_POST['anio'];
  $clasificacion = $_POST['clasificacion'];
  $fecha_inicio = $_POST['fecha_inicio'];
  $fecha_final = $_POST['fecha_final'];
  $progreso = $_POST['progreso'];

  // Insertar datos en la base de datos
  $sql = "INSERT INTO proyectos (nombre_proyecto, anio, clasificacion,fecha_inicio, fecha_final, progreso) VALUES ('$nombre_proyecto', '$anio', '$clasificacion','$fecha_inicio','$fecha_final', '$progreso')";

  if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
  } else {
    echo "Error al guardar datos: " . $conn->error;
  }

  // Cerrar conexión
  $conn->close();
?>