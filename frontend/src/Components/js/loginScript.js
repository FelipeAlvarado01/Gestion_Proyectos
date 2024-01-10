function createTask(event) {
  const alert = document.getElementById('task-form');
  alert.innerHTML +=
    `
    <div class="modal_container">
      <div class="modal__conten">
        <button onclick="closeModal()">x</button>
        <form id="addTaskForm" action="addProjects.php" method="POST">
          <h2>Agregar Tarea</h2>
          <input type="text" id="title" name="nombre_proyecto" placeholder="Título del proyecto">
          <input type="text" id="age" name="anio" placeholder="Año del creacion">
          <input type="text" id="clasification" name="clasificacion" placeholder="Clasificacion">
          <input type="date" id="fecha_inicio" name="fecha_inicio" placeholder="Fecha Límite">
          <input type="date" id="fecha_final" name="fecha_final" placeholder="Fecha Límite">
          <input type="number" id="progress" name="progreso" placeholder="Progreso (%)" min="0" max="100">
          <button>Agregar Tarea</button>
      </form>
      </div>  
    </div>
  `
}