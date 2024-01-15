<?php
include("connection.php");

// Obtener usuarioID y clasificacion de la URL
$usuarioID = $_GET['usuarioID'];
$clasificacion = $_GET['clasificacion'];


// Modificar la consulta SQL para obtener proyectos filtrados
$sql = "SELECT * FROM proyectos WHERE usuarioID = $usuarioID AND clasificacion = '$clasificacion'";
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
    echo json_encode(array('mensaje' => 'No se encontraron proyectos para el usuario y tipo de proyecto especificados.'));
}

// Cerrar conexión
$conn->close();
?>
