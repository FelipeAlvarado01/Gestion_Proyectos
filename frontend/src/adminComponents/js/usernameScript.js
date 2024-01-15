//Esta funcion da el nombre de usuario
let username;

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  username = urlParams.get("username");

  if (username) {
    document.getElementById('username').innerText = username;
  }
});

