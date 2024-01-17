<?php
include("connection.php");

// Obtener usuarioID, clasificacion y anio de la URL
$usuarioID = $_GET['usuarioID'];
$clasificacion = $_GET['clasificacion'];
$anio = isset($_GET['anio']) ? $_GET['anio'] : null;  // Se verifica si se proporciona el parámetro anio

// Modificar la consulta SQL para obtener proyectos filtrados por usuarioID, clasificacion y anio
$sql = "SELECT * FROM proyectos WHERE usuarioID = $usuarioID AND clasificacion = '$clasificacion'";
if ($anio) {
    $sql .= " AND anio = $anio";
}

$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    // Obtener los proyectos
    $proyectos = array();
    while ($fila = $resultado->fetch_assoc()) {
        $proyectos[] = $fila;
    }

    // Devolver proyectos en formato JSON
    echo json_encode($proyectos);
} else {
    echo json_encode(array('mensaje' => 'No se encontraron proyectos para el usuario, tipo de proyecto y año especificados.'));
}

// Cerrar conexión
$conn->close();
?>