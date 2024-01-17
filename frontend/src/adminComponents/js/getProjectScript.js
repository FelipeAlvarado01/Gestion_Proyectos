
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
        loadProjectforClasification(clasificacion, parseInt(usuarioID, 10));
    } else {
        console.log("No se proporcionó un usuarioID o clasificacion en la URL.");
    }
});

function filterFunction() {
    let clasificacion = sessionStorage.getItem("clasificacion");
    let usuarioID = sessionStorage.getItem("usuarioID");
    let selectedAnio = document.getElementById('selectAnio').value;

    console.log("hola");
    
    if (clasificacion && usuarioID) {
        //loadProjectforClasification(clasificacion, parseInt(usuarioID, 10), selectedAnio);
    } else {
        console.log("No se proporcionó un usuarioID o clasificacion en la URL.");
    }
}

function loadProjectforClasification(clasificacion, usuarioID, selectedAnio) {
    let url = `getProjects.php?clasificacion=${clasificacion}&usuarioID=${usuarioID}`;

    if (selectedAnio) {
        url += `&anio=${selectedAnio}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
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
                    </tr>`;
            });

            document.getElementById('table_data').innerHTML = str;
        });
}

function redirectToAdminTask(projectID) {
    window.location.href = `./../../../../../Gestion_Proyectos/frontend/src/adminComponents/adminTask.html?projectID=${projectID}`;
}
