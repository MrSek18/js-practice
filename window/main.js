
// youtubeurl = "https://youtube.com"


// respuesta = confirm("do you want to close the pop-up window?");
// let ventana = window.open(youtubeurl) //abre una ventana emergente

// // ventana.close(); // cierra la ventana emergente

// // console.log(ventana.closed)

// // window.stop(); //detiene la carga de la ventana



// // window.alert("Hi sr, how are ya?")

// // window.print();



// // respuesta = prompt("Give me data");


// console.log(respuesta)
// if(respuesta){
//     ventana.close()
// }else{
//     alert("Está bien")
// }


// const screenLeft = window.screenLeft;
// const screenTop = window.screenTop;
// const screen = window.screen

// console.log(screenLeft);
// console.log(screenTop);
// console.log(screen);



// document.write("Distancia entre el borde izquierdo de la pantalla y el borde izquierdo de la ventana: " + screenLeft + "<br>")
// document.write("Distancia entre el borde superior de la pantalla y el borde superior de la ventana: " + screenTop + "<br>")

// const scrollY = window.scrollY;

// const scrollX = window.scrollX;

// console.log("Distancia recorrida en el eje Y: " + scrollY + " pixeles")
// console.log("Distancia recorrida en el eje X: " + scrollX + " pixeles")

//eje "Y" es hacia abajo
//eje "X" es hacia derecha

// window.minimize() //minimiza la ventana pero ya es inutil 

// resizeTo(0, 100) // redimenciona dinámicamente la ventana, pero no funciona por la politica "same origin"
// resizeBy(0, 100) // redimenciona la ventana, pero no funciona por la politica "same origin"
 
// moveTo(100, 0 ); // Mueve la ventana a una ubucacion relativa.
// moveBy(0,100) // Mueve la ventana a una ubicacion absoluta.

// ventana = window.open("https://youtube.com");


const href = window.location.href;

document.write(href)

window.location.href //
window.location.hostname //

window.location.pathname // shows only where it's located (no the domain and subdomain, and the reference)

window.location.protocol // shows the protocol "http"

window.location.assign("rute")// charge new page

// url = "https://youtube.com" //En este caso, este es un href completo

// url = "www.youtube.com" //En este caso, nos muestra el subdominio con el dominio (el "www" es el subdominio)

// 