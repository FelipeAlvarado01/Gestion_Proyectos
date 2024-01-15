let globalClasificacion;

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  globalClasificacion = urlParams.get("clasificacion");
});

function createTask(event) {
  const alert = document.getElementById('task-form');
  alert.innerHTML +=
    `
    <div class="modal_container">
      <div class="modal__content">
        <button onclick="closeModal()">x</button>
        <form id="addTaskForm" action="addProjects.php" method="POST">
          <h2>Agregar Tarea</h2>
          <input type="hidden" name="clasificacion" value="${globalClasificacion}">
          <input type="text" id="title" name="nombre_proyecto" placeholder="Título del proyecto">
          <input type="text" id="age" name="anio" placeholder="Año del creacion">
          <input type="date" id="fecha_inicio" name="fecha_inicio" placeholder="Fecha Límite">
          <input type="date" id="fecha_final" name="fecha_final" placeholder="Fecha Límite">
          <input type="number" id="progress" name="progreso" placeholder="Progreso (%)" min="0" max="100">
          <button>Agregar Tarea</button>
      </form>
      </div>  
    </div>
  `
}

document.getElementsByClassName('createTask')[0].addEventListener('click', createTask);

function closeModal() {
  const modal = document.querySelector('.modal_container');
  if (modal) {
    modal.remove();
  }
}