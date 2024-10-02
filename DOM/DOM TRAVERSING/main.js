// const contenedor  = document.querySelector(".contenedor");

// const new_parrafo = document.createElement("P");
// new_parrafo.innerHTML = "EL NUEVO PARRAFO";

// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";


// const h2_antiguo = document.querySelector(".h2");
// const p_antiguo = document.querySelector(".p");


// // contenedor.replaceChild(h2_nuevo, h2_antiguo)

// // contenedor.replaceChild(new_parrafo, p_antiguo)

// // contenedor.removeChild(h2_antiguo)

// // let respuesta = h2_antiguo.hasChildNodes();

// // if(respuesta){
// //     console.log("Sí hay")
// // }else{
// //     console.log("No hay")
// // }

// // let respuesta = p_antiguo.parentNode;


// let parentNode = h2_antiguo.parentNode; // Al usar "parentNode", involucra que nos salte un nodo con mayor jerarquía que el padre 
// // console.log(parentNode)

// //siblings

// const h4_element = document.querySelector(".h4");

// console.log(h4_element.previousSibling) // Como ya se había visto antes, este metodo develve el nodo y no el elemento, las variaciones son "next" y"previous"
// console.log(h4_element.previousElementSibling) // Como ya se había visto antes, este metodo develve el elemento, las variaciones son "next" y"previous"


const closestdiv = document.querySelector(".div-3"); //this return the "closest element with the name class we put"
console.log(closestdiv.closest(".div"))

//----------------------------------------------------------------


// const contenedor = document.querySelector(".contenedor");


// const fragmento = document.createDocumentFragment();

// for(i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "hola";
//     fragmento.appendChild(item); 

// }

// contenedor.appendChild(fragmento)
