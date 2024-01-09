<?php
include("connection.php");

// Realizar la consulta para obtener los proyectos de la base de datos
$sql = "SELECT * FROM proyectos"; // Ajustar según tu estructura de base de datos

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  echo json_encode($data); // Devolver los proyectos en formato JSON
} else {
  echo json_encode(array()); // Si no hay proyectos, devolver un array vacío
}

$conn->close();
?>