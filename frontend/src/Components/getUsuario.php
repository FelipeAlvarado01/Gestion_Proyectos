<?php
include("connection.php");

// Obtener correo y contraseña del formulario de inicio de sesión
$correo = $_POST['email'];
$contrasenia = $_POST['contrasenia'];

// Escapar las variables para prevenir inyección SQL (puedes mejorar la seguridad utilizando consultas preparadas)
$correo_escapado = $conn->real_escape_string($correo);
$contrasenia_escapada = $conn->real_escape_string($contrasenia);

// Consulta SQL para buscar el correo y contraseña en la base de datos
$sql = "SELECT * FROM usuario WHERE email = '$correo_escapado' AND contrasenia = '$contrasenia_escapada'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Usuario autenticado exitosamente
    // Redireccionar a la página correspondiente según el rol del usuario
    $row = $result->fetch_assoc();
    $rol = $row['rol']; // Supongamos que tienes un campo 'rol' en tu tabla 'usuarios'

    if ($rol === 'administrador') {
        header("Location: adminProjects.html");
        exit();
    } elseif ($rol === 'colaborador') {
        header("Location: Projects.html");
        exit();
    } else {
        // Manejar otros roles o situaciones
        echo "Rol no reconocido o no autorizado";
        // Puedes redirigir a una página de error o hacer otra cosa aquí
    }
} else {
    // Usuario no encontrado o credenciales incorrectas
    echo "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
}

// Cerrar conexión a la base de datos
$conn->close();
