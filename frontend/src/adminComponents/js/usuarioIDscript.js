
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const usuarioID = urlParams.get("usuarioID");

  // Almacenar valores en sessionStorage
  sessionStorage.setItem("usuarioID", usuarioID);
});

