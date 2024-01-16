
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  const usuarioID = urlParams.get("usuarioID");

  // Almacenar valores en sessionStorage
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("usuarioID", usuarioID);
});

