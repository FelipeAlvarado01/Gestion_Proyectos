// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Aquí deberías verificar el nombre de usuario y la contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ejemplo de verificación básica
  if (username === 'usuario' && password === 'contraseña') {
    alert('¡Inicio de sesión exitoso!');
    // Aquí podrías redirigir al usuario a otra página o realizar acciones posteriores al inicio de sesión
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});
