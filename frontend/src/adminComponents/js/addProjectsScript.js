function createTask(event) {
  const alert = document.getElementById('task-form');
  alert.innerHTML +=
    `
    <div class="modal_container">
      <div class="modal__conten">
        <button onclick="closeModal()">x</button>
        <form id="addTaskForm">
          <h2>Agregar Tarea</h2>
          <input type="text" id="title" name="nombre_proyecto" placeholder="Título del proyecto">
          <input type="text" id="age" name="anio" placeholder="Año de creación">
          <input type="text" id="clasification" name="clasificacion" placeholder="Clasificación">
          <input type="date" id="fecha_inicio" name="fecha_inicio" placeholder="Fecha Límite">
          <input type="date" id="fecha_final" name="fecha_final" placeholder="Fecha Límite">
          <input type="number" id="progress" name="progreso" placeholder="Progreso (%)" min="0" max="100">
          <button id="addProjectButton">Agregar Tarea</button>
      </form>
      </div>  
    </div>
  `;

  document.getElementById('addProjectButton').addEventListener('click', addProject);
  addProjects();
}

function addProject(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const age = document.getElementById('age').value;
  const clasification = document.getElementById('clasification').value;
  const fecha_inicio = document.getElementById('fecha_inicio').value;
  const fecha_final = document.getElementById('fecha_final').value;
  const progress = document.getElementById('progress').value;

  const projectData = {
    nombre_proyecto: title,
    anio: age,
    clasificacion: clasification,
    fecha_inicio: fecha_inicio,
    fecha_final: fecha_final,
    progreso: progress
  };

  fetch('addProjects.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectData)
  })
  .then(response => response.text())
  .then(result => {
    swal("¡Proyecto guardado!", "El proyecto se ha guardado correctamente", "success");
    addProjects();
  })
  .catch(error => {
    console.error('Error al guardar el proyecto:', error);
    swal("Error", "Hubo un error al guardar el proyecto", "error");
  });
}

function addProjects() {
  fetch('getProjects.php')
    .then(response => response.json())
    .then(data => {
      const projectList = document.getElementById('projectList');
      projectList.innerHTML = '';

      if (data.length > 0) {
        data.forEach(proyecto => {
          const proyectoItem = document.createElement('div');
          proyectoItem.classList.add('project-item');
          proyectoItem.innerHTML = `
            <h3>${proyecto.nombre_proyecto}</h3>
            <p>Clasificación: ${proyecto.clasificacion}</p>
            
          `;
          projectList.appendChild(proyectoItem);
        });
      } else {
        projectList.innerHTML = '<p>No hay proyectos guardados.</p>';
      }
    })
    .catch(error => console.error('Error al obtener proyectos:', error));
}

document.getElementsByClassName('createTask')[0].addEventListener('click', createTask);

function closeModal() {
  const modal = document.querySelector('.modal_container');
  if (modal) {
    modal.remove();
  }
}

// Función para agregar una nueva tarea
/*function addTask() {
  const title = document.getElementById('title').value;
  const progress = document.getElementById('progress').value;

  if (title !== '' && progress !== '') {
    const taskList = document.getElementById('taskList');

    // Crear una nueva tarjeta de tarea
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // Contenido de la tarjeta de tarea
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.textContent = `${progress}%`;
    progressBar.style.width = '0'; // Inicialmente la barra está vacía

    taskCard.innerHTML = `
      <h3>${title}</h3>
      <br><br>
    `;

    taskCard.appendChild(progressBar);
    taskList.appendChild(taskCard);

    // Agregar la clase para la animación de la barra de progreso
    setTimeout(() => {
      progressBar.classList.add('progress-animation');
      progressBar.style.width = `${progress}%`; // Establecer el ancho deseado
    }, 100); // Añadir un pequeño retraso para que la animación se muestre correctamente

    // Limpiar los campos del formulario
    document.getElementById('title').value = '';
    document.getElementById('progress').value = '';

    event.preventDefault();
  } else {
    alert('Por favor, completa todos los campos.');
  }
}*/
