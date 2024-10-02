// El DOM (document object model) = () => {console.log("Es cualquier etiqueta del cuerpo 'body', e incluso las etiquetas de una lista")}
const parrafo = document.getElementById("parrafo"); //para lograr obtener el contenido de la etiqueta "p", el link del script debe estar dentro del cuerpo(body);


const parrafo1 = document.getElementsByTagName("p"); //para lograr obtener el contenido de las etiquetas "p", el link del script debe estar dentro del cuerpo(body);

// document.write(parrafo1[3]) //No se devulve un array, se devuelve una lista de elementos, en este caso se está llamando al primer elemento de la lista


const parrafo2 = document.querySelector(".parrafo"); //para lograr obtener el contenido de la etiqueta con la clase "parrafo", el link del script debe estar dentro del cuerpo(body);

const parrafo3 = document.querySelector("#parrafo"); //para lograr obtener el contenido de la etiqueta con el id "parrafo", el link del script debe estar dentro del cuerpo(body);

const parrafo4 = document.querySelectorAll(".parrafo"); //para lograr obtener el contenido de las etiquetas con el id "#parrafo" o clase ".parrafo", el link del script debe estar dentro del cuerpo(body); // devulve un nodeList, pero no es un array


const rangoEtario = document.querySelector(".rangoEtario");


rangoEtario.setAttribute("range", "1px") // Con esto podemos modificar o crear el valor de una propiedad.

valorDelAtributo = rangoEtario.setAttribute("type","range")

// rangoEtario.removeAttribute("range") // se elimna el valor y la propiedad.

// document.write(rangoEtario.getAttribute("range")) // para obtener el valor de la propiedad




