// // const titulo = document.querySelector(".titulo");

// // const titulos = document.getElementsByClassName("titulo")
// // // titulo.setAttribute("contentEditable", "True")

// // // titulo.setAttribute("dir", "rtl") //ordena el contendido de derecha a izquierda
// // // titulo.setAttribute("hidden","true") //esconde el contendio 

// // // titulo.setAttribute("tabindex","0") //esconde el contendio
// // for (let i = 0; i < titulos.length; i++) {
// //     titulos[i].setAttribute("tabindex",i + 1) //esconde el contendio
// // }

// // // titulo.setAttribute("title","title changed")


// // const input1 = document.querySelector(".input-normal");

// // const input = document.getElementById("input-normal");

// // document.write(input.className); // para extraer el nombre de la clase;

// // // document.write(input.type = "file");

// // // input.accept = "image/gif"

// // input.setAttribute("minlength", "4");


// // input.placeholder = "whats up, my nigga?"

// // input.required = "required"

// const titulo20 = document.querySelector(".titulo");

// titulo20.style.padding = "30px"

// //----------------------------------------
// // Class List:

// // titulo20.classList.add("grande")

// // titulo20.classList.remove("grande")


// let classExtract = titulo20.classList.item(0); // para seleccionar la clase por su index

// document.write(classExtract + "<br>")

// let confirmation = titulo20.classList.contains("grande") // Para confirmar la existencia de una de las clases

// document.write(confirmation + "<br>")



// // Esta es una forma de agregar y remover si su existencia es relativa
// // if (confirmation){
// //     titulo20.classList.remove("grande")
// //     document.write("La existía, y fue removida");
// // }else{
// //     titulo20.classList.add("grande")
// //     document.write("la clase no existía, pero ahora sí")
// // }

// //Esta es una forma más rápida


// titulo20.classList.toggle("grande", false) // El toggle "solo" es relativo, pero si agregarmos valoraes boolean como segundo parametro, asegurará que se mantenga sin la existencia o con la existencia de esa clase

// titulo20.classList.replace("rojo", "green")

//------------------------------------

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent; // Esto nos devuelve el texto sin formato adicionales

// alert(resultado) 


// const clase = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();


// for (i = 0; i < 20; i++){ // agregar todos los elementos en un fragmento documentado, permite una mejor ejecución del codigo
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appendChild(item)
// }

// console.log(fragmento);


const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.lastChild; // Es importante recordar que los nodos (hijos), que deseemos rescatar, deben estar completamente pegados, ya que, en caso de indentación, no se tomará, y automáticamente se mostrará un nodo "text"

//Pero para no tener que estar juntando los nodos, podemos usar "Element" entre medio de el lugar y Child:
const primerHijo1 = contenedor.lastElementChild;

const nodos = contenedor.childNodes; //Esto te devuelve un "NodeList", no un array, con todos los nodos que existen

const nodos_w_children = contenedor.children; //Devulve todos los "hijos" (una colleccion), y esta colección no se puede recorrer con for each, pero si de otra forma:

// for(hijo of nodos_w_children){
//     console.log(hijo)
// }


// console.log(nodos_w_children)


// nodos.forEach(hijo=>{ //como es un objeto, su puede recorrer
//     console.log(hijo)
// })







