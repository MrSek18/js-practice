


const boton = document.getElementById("send-button");

let valorAntiguo = boton.value;

boton.value = valorAntiguo.toUpperCase();

function crearLlave(n, m, p){
    img = "<img class='llave-img' src='key.png' >";
    names = `<h2> llave: ${n}</h2>`;
    model = `<h4> model: ${m}</h4>`;
    price = `<p> price: <b> $ ${p}</b> </p>`;

    return [names, model, price, img]

}

const llave1 = crearLlave("trick", "X 28", 38)

const container = document.querySelector(".flex-container");

// container.innerHTML += llave1[3] + llave1[0] + llave1[1] + llave1[2];
let documentFragment = document.createDocumentFragment();

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

for(var i = 1; i<20; i++){
    let modeloRandom = Math.round(Math.random()*1000+30);
    let precioRandom = Math.random()*10;
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{
        changeHidden(modeloRandom)
    })
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    let llave = crearLlave(i, modeloRandom, precioRandom.toFixed(2));
    div.innerHTML += llave[3] + llave[0] + llave[1] + llave[2];
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment)


