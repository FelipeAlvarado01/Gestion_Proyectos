fetch('getProjects.php')
    .then(res => res.json())
    .then(data => {

        // console.log(data);
        let str = '';
        data.map(item => {
            str += `
            <tr>
                <td>${item.projectID}</td>
                <td>${item.nombre_proyecto}</td>
                <td>${item.anio}</td>
                <td>${item.clasificacion}</td>
                <td>${item.fecha_inicio}</td>
                <td>${item.fecha_final}</td>
                <td>${item.progreso}</td>
                <td><a href="#" onclick="redirectToAdminTask(${item.projectID})">Ver Tareas</a></td>
            </tr>
        `
        });

        document.getElementById('table_data').innerHTML = str;
    });
function redirectToAdminTask(projectID) {
    // Redirigir a adminTask.html con el ID del proyecto
    window.location.href = `./../../../../../Gestion_Proyectos/frontend/src/adminComponents/adminTask.html?projectID=${projectID}`;
}