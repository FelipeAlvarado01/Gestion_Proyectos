<?php
include("connection.php");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM proyectos';
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            'projectID' => $row['projectID'],
            'nombre_proyecto' => $row['nombre_proyecto'],
            'anio' => $row['anio'],
            'clasificacion' => $row['clasificacion'],
            'fecha_inicio' => $row['fecha_inicio'],
            'fecha_final' => $row['fecha_final'],
            'progreso' => $row['progreso'],
        ];
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>