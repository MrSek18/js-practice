let matriz = document.querySelector(".matriz-habitaciones");
let salto = 10;
let fila = "";      
let letters = ["A", "B", "C", "D", "E"];
let letterSelected = 0;

function crearMatriz() {
    for (let n = 1; n <= 5; n++) {
        for (let i = 1; i <= 10; i++) {
            let h = letters[letterSelected] + i;
            fila += `${h}\t`;  

            if (i % salto === 0) {
                letterSelected += 1;
                matriz.innerHTML += fila + "<br>";  
                fila = "";  
            }
        }
    }
}

function cambiarColorImpares() {
    const elementos = matriz.innerHTML.split('<br>');
    for (let i = 0; i < elementos.length; i++) {
        let items = elementos[i].split('\t');
        for (let j = 0; j < items.length; j++) {
            if (parseInt(items[j].slice(-1)) % 2 !== 0) {
                items[j] = `<span style="color: blue;">${items[j]}</span>`;
            }
        }
        elementos[i] = items.join('\t');
    }
    matriz.innerHTML = elementos.join('<br>');
}

crearMatriz();

document.getElementById('disponibles').addEventListener('click', cambiarColorImpares);
