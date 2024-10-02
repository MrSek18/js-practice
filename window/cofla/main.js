
// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// let altoo = window.screen.height;
// let anchoo = window.screen.width;

// comprar = confirm(`El alto es de ${alto}px <br> y el alto es de ${ancho} pixeles`)
// compraro = confirm(`El alto es de ${altoo}px <br> y el alto es de ${anchoo} pixeles`)


// if (comprar){
//     alert("compra realizada exitosamente");
// }else{

// }


let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocol: <b>${protocol}</b> <br>`;
html += `pathname: <b>${pathname}</b> <br>`;
html += `hostname: <b>${hostname}</b> <br>`;
html += `href: <b>${href}</b> <br>`;

document.write(html)

const miElemento = document.getElementById("miDiv");
console.log(miElemento.outerHTML);  // Muestra el HTML completo del div en la consola


// Cambiar el outerHTML del elemento
miElemento.outerHTML = '<section><p>Nuevo contenido</p></section>';


document.querySelector("body > div > p").style.hover ="red";


// Snippets: los snippets son porciones de codigo js que se pueden guardar en el apartado "snippets", esto nos permite reutilizar codigo y abstenernos a copiar y pegar otra vez (se guarda aún cuando recargamos la página)