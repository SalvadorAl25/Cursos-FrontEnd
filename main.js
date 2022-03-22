const url = "http://localhost:8010/usuarios"

fetch(url, {
        mode: "cors"
    })
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error));



const mostrarData = (data) => {

    let body = ''
    for (let i = 0; i < data.length; i++) {
        let priori
        switch (data[i].prioridad) {
            case 1:
                priori = "Normal";
                break;
            case 2:
                priori = "Alta";
                break;
            case 3:
                priori = "Premiun";
                break;
        }
        body += `<tr>
                    <td scope="col">${data[i].id}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].email}</td>
                    <td>${priori}</td>
                    <td>
                    <button type="button" onClick="eliminarUsuario(${data[i].id})" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
                    <button type="button" onClick="editarUsuario(${data[i].id})" class="btn btn-outline-primary"><i class="fa-solid fa-pen"></i></button>
                    </td>
                </tr>`
    }
    document.getElementById('data').innerHTML = body
}

function editarUsuario(id) {
    location.href = "edit.html?id=" + id;

}

function eliminarUsuario(id) {
    fetch(url + '/' + id, {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(res => console.log(res));
    location.reload();
}