let globalProjectID;

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  globalProjectID = urlParams.get("projectID");
});

function createTask() {
  const alert = document.getElementById('task-form');
  alert.innerHTML +=
    `
    <div class="modal_container">
      <div class="modal__conten">
        <button onclick="closeModal()">x</button>
        <form id="addTaskForm" action="addTask.php" method="POST">
          <h2>Agregar Tarea</h2>
          <!-- Campo oculto para almacenar el globalProjectID como número -->
          <input type="hidden" name="projectID" value="${parseInt(globalProjectID, 10)}">
          <input type="text" id="title" name="nombre_tarea" placeholder="Título de la tarea">
          <input type="text" id="age" name="colaboradores" placeholder="Colaboradores">
          <input type="number" id="progress" name="progreso" placeholder="Progreso (%)" min="0" max="100">
          <input type="text" id="age" name="anexos" placeholder="Anexos">
          <button>Agregar Tarea</button>
      </form>
      </div>  
    </div>
  `;
}


document.getElementsByClassName('createTask')[0].addEventListener('click', function() {
  // Llama a createTask sin pasar explícitamente el projectID
  createTask();
});

function closeModal() {
  const modal = document.querySelector('.modal_container');
  if (modal) {
    modal.remove();
  }
}