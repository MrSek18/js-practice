
let body = document.getElementsByTagName("body")

let table = document.createElement("table")

function nAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    let fila = document.createElement("tr");
    for (let i = 0; i < 10; i++) {
        let columna = document.createElement("td");
        columna.innerHTML += nAleatorio(0,1000);
        fila.appendChild(columna);
    }
    table.appendChild(fila);
}

document.body.appendChild(table)

