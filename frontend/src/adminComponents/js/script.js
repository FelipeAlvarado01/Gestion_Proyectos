// Función para alternar la visibilidad del formulario de tareas
function toggleForm() {
  const taskForm = document.getElementById('taskForm');
  taskForm.style.display = (taskForm.style.display === 'none' || taskForm.style.display === '') ? 'block' : 'none';
}

function createTask(){
  const alert = document.getElementById('task-form');
  alert.innerHTML += 
  `
    <div class="modal_container">
      <div class="modal__conten">
        <button onclick="close()">x</button>
          <form id="addTaskForm">
            <h2>Agregar Tarea</h2>
            <input type="text" id="title" placeholder="Título de la tarea">
            <input type="text" id="collaborators" placeholder="Colaboradores">
            <input type="number" id="progress" placeholder="Progreso (%)" min="0" max="100">
            <button onclick="addTask()">Agregar Tarea</button>
          </form>
      </div>  
    </div>
  `
}

// Función para agregar una nueva tarea
function addTask(event) {
  event.preventDefault(); // Evitar que la página se recargue al hacer clic en el botón "Agregar Tarea"

  const title = document.getElementById('title').value;
  const collaborators = document.getElementById('collaborators').value;
  const progress = document.getElementById('progress').value;

  if (title !== '' && collaborators !== '' && progress !== '') {
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
      <p><strong>Colaboradores:</strong> ${collaborators}</p>
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
    document.getElementById('collaborators').value = '';
    document.getElementById('progress').value = '';
    
  } else {
    alert('Por favor, completa todos los campos.');
  }
}

document.getElementsByClassName('createTask')[0].addEventListener('click', createTask);