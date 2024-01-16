document.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("username");
  if (username) {
    console.log(typeof username);
    document.getElementById('username').innerText = username;
  }
});

