document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clasificacion = urlParams.get("clasificacion");

    // Almacenar valores en sessionStorage
    sessionStorage.setItem("clasificacion", clasificacion);
});

document.addEventListener("DOMContentLoaded", function () {
    const clasificacion = sessionStorage.getItem("clasificacion");
    const usuarioID = sessionStorage.getItem("usuarioID");

    if (clasificacion && usuarioID) {
        document.getElementById('username').innerText = username;
        loadProjectforClasification(clasificacion, parseInt(usuarioID, 10));
    } else {
        console.log("No se proporcionó un usuarioID o clasificacion en la URL.");
    }
});

function loadProjectforClasification(clasificacion, usuarioID) {
    fetch(`getProjects.php?clasificacion=${clasificacion}&usuarioID=${usuarioID}`)
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
        `;
            });

            document.getElementById('table_data').innerHTML = str;
        });
}

function redirectToAdminTask(projectID) {
    // Redirigir a adminTask.html con el ID del proyecto
    window.location.href = `./../../../../../Gestion_Proyectos/frontend/src/adminComponents/adminTask.html?projectID=${projectID}`;
}