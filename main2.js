const url = "http://localhost:8010/usuarios"

function saveUser() {
    let usuario = document.forms['usuario '];
    let nom = usuario['nom '].value;
    let mail = usuario['mail '].value;
    let prio = usuario['prioridad '].value;

    fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nom,
                email: mail,
                prioridad: prio
            })
        })
        .then(res => res.json())
        .then(res => console.log(res));
    location.href = "index.html"
}

function editarUsuario() {
    var URLsearch = window.location.search;
    let id = URLsearch.slice(4);

    let usuario = document.forms['usuario '];
    let nom = usuario['nom '].value;
    let mail = usuario['mail '].value;
    let prio = usuario['prioridad '].value;

    fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                nombre: nom,
                email: mail,
                prioridad: prio
            })
        })
        .then(res => res.json())
        .then(res => console.log(res));
    location.href = "index.html"
}