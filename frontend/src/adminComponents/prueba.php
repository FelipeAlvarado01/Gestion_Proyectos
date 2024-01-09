<?php
// Datos de conexión a la base de datos
$servername = 'localhost';
$username = 'root';
$dbname = 'acoproyectos';

// Crear conexión a la base de datos
$conexion = mysqli_connect($servername, $username, '', $dbname) or die(mysqli_error($mysqli));

function insertar($data)
{
  global $conexion;
  $nombre  = $data['nombre'];
  $email = $data['email'];

  $consulta = "INSERT INTO tabla_datos(nombre,email) VALUES ('$nombre','$email')";

  $query = mysqli_query($conexion, $consulta);
  if ($conexion->affected_rows > 0) {
    return true;
  } else {
    return $conexion->error;
  }
}

insertar($_POST);
?>