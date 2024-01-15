document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectID = urlParams.get("projectID");
    
    if (projectID) {
        // Hacer algo con el projectID, como cargar y mostrar las tareas relacionadas
        loadTasksForProject(parseInt(projectID, 10));
    } else {
        console.log("No se proporcionó un projectID en la URL.");
    }
});

function loadTasksForProject(projectID) {
    // Realizar una solicitud para obtener las tareas del proyecto específico
    fetch(`getTasksForProject.php?projectID=${projectID}`)
        .then(res => res.json())
        .then(data => {
            // Verificar si hay tareas asociadas al proyecto
            if (data.length > 0) {
                let taskListHTML = '<ul>';

                // Iterar sobre las tareas y construir el HTML
                data.forEach(task => {
                    taskListHTML += `
                    <li>
                        <strong>${task.nombre_tarea}</strong><br>
                        Colaboradores: ${task.colaboradores}<br>
                        Progreso: ${task.progreso}%<br>
                        Anexos: ${task.anexos}
                    </li>
                `;
                });

                taskListHTML += '</ul>';

                document.getElementById('taskListContainer').innerHTML = taskListHTML;
            } else {
                // No hay tareas asociadas al proyecto
                console.log(`No hay tareas para el proyecto con ID ${projectID}`);
            }
        })
        .catch(error => console.error('Error al obtener tareas:', error));
}
