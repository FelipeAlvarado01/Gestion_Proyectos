<?php
include("connection.php");

// Recibir datos del formulario
$email = $_POST['email'];
$contrasenia = $_POST['contrasenia'];

$sql = "SELECT * FROM usuario WHERE email = '$email' AND contrasenia = '$contrasenia'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    // Obtener el tipo de usuario y nombre de usuario de la fila recuperada de la base de datos
    $fila = $resultado->fetch_assoc();
    $tipo_usuario = $fila['tipo_usuario'];
    $nombre = $fila['nombre'];

    // Los datos son correctos, redirigir a la página correspondiente con el nombre de usuario y usuarioID
    if ($tipo_usuario == 'administrador') {
        echo '<script>window.location.href = "../adminComponents/adminTypeOfProjects.html?username=' . htmlspecialchars($nombre) . '&usuarioID=' . $fila['usuarioID'] . '";</script>';
    } else {
        echo '<script>window.location.href = "./TypeOfProject.html?username=' . htmlspecialchars($nombre) . '&usuarioID=' . $fila['usuarioID'] . '";</script>';
    }
} else {
    //echo "Error: Usuario o contraseña incorrectos.";
    echo '<script>alert("Error: Usuario o contraseña incorrectos.");</script>';
}

// Cerrar conexión
$conn->close();
?>
