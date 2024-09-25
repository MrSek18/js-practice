let cadena = "me importa una mierda dalto";

let cadena2 = "75598868 "
let cadena3 = "ba"

// resultado = cadena.concat(cadena2);

// resultado = cadena.startsWith(cadena2);
// resultado2 = cadena.endsWith(cadena2);
// resultado3 = cadena.includes(cadena2)
// resultado4 = cadena.indexOf(cadena2) //si no encuentra la cadena de texto, devuelve "-1". También, en caso de que exista ese valor en la cadena, más de una vez, se devolverá como numero de index al ultimo conjunto repetido.
// least3_numbers = cadena2.slice(-3)
// resultado5 = least3_numbers.padStart(cadena2.length, "*")

// resultado6 = least3_numbers.padEnd(cadena2.length, "*")

// r7 = cadena2.repeat(2)

// let newc1 = ["pedro", "maría", "jorge"];
// let r8 = newc1.split(","); // el metodo split separa el contenido de la cadena para transformarlo en un index, o sea, un valor separado del resto

// let r9 = newc1.substring(0,2);
// let r10 = newc1.toLowerCase();
// let r11 = newc1.toUpperCase();
// let r12 = newc1.toString();
// let r13 = newc1.trim(); // elimina los espacio de la derecha e izquierda de la cadena
// let r14 = newc1.trimStart();
// let r15 = newc1.trimEnd();

// let r16 = newc1.pop(); // así noma elimna el ultimo
// let r17 = newc1.shift(); // así noma elimna el primero

// document.write(r16 + "<br>");
// document.write("Array original: <b style ='color:blue'>" + newc1 + "</b> <br>");
// let r17 = newc1.shift(); // así noma elimna el ultimo

// document.write("Objeto eliminado: <b style ='color:red'>" + r17 + "</b> <br>");
// document.write("Array modificado: <b style ='color:black'>" + newc1 + "</b> <br>");

// let newchain = 0;
// let newc2 = ["sek", "jr", "touch"];

// document.write(newc2 + "<br>");

// let r18 = newc2.push("noone")
// newc2.reverse()
// document.write(newc2 + "<br>");


// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

// document.write(numeros + "<br>");

// // numeros.unshift(0,1,2); // agrega valores al principio del array


// // numeros.sort(); // ordena los numeros del mayor a menor (en caso sean numeros) y  en caso de que sea un array de strings, toma la primera letra de cada cadena y lo ordena de forma alfabética (abcdefgh...)

// // numeros.splice(1,3) // elimina un rango del index de la lista de strings.
// // numeros.splice(1,3, "roberto", "maria", "sek") // Si queremos agregar nuevos valores en el lugar de los que estamos eliminando, deberemos hacerlo a partir del tercer parámetro.

// numeros.splice(-1,0, "roberto", "maria", "sek") // De manera inversa también podemos eliminar, y así es como ponemos los valores en vez de "bobo", y bobo se agrega al final, pero si queremos elimnar "bobo", debemos escribir "numeros.splice(-1, 1)"


// document.write(numeros)


let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

// document.write(numeros[0] + "<br>");

// let resultado = numeros.join("----"); // separa los valores y los transforma a strigs, y los muestra todos, dependiendo de lo que coloquemos entre los parentecis del método, este será tomado y agregado entre los valores que haya

// let resultado = numeros.slice(0,2) //muestra los valores en base al index
// let resultado2 = numeros.slice(0,-1) //muestra los valores en base al index

resultado = numeros.filter(numero => numero.length > 5)

let num1 = Math.random()*100;
let num2 = Math.floor(2.9)

document.write(num2)
// document.write("Elementos: " + resultado + "<br>");
// document.write(resultado2);