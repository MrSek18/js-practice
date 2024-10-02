// const botton = document.querySelector(".boton")
// const cont1 = document.querySelector(".contenedor1")
// const cont2 = document.querySelector(".contenedor2")

    // Esto se conoce como "event flow", es la forma en que van a ejecutarse los events listeners (desde el menos específico hasta el más específico)
        //asd

    // cont1.addEventListener("click", (e)=>{
    //     alert("contenedor1")
    // })
    // // },true) // Con el "true" se ejecuta primero ese evento, luego sigue con la linea de ejecución normal

    // cont2.addEventListener("click", (e)=>{
    //     alert("contenedor2")
    // })

    // botton.addEventListener("click", (e)=>{
    //     alert("botón")
    //     console.log(e.target)
    //     e.stopPropagation(); // Esto hace que ya no se ejecuten los demas events listeners
    // })

    // function saludar(){
    //     alert("hola")
    // }
    // botton.removeEventListener("click", saludar);

    // botton.addEventListener("dblclick", (e)=>{
    //     alert("doble click realizado")
    // })

    // let clickCount = 0;
    // const delay = 300; // Intervalo para detectar un doble clic

    // botton.addEventListener("click", () => {
    //     clickCount++;
        
    //     if (clickCount === 1) {
    //         setTimeout(() => {
    //             if (clickCount === 2) {
    //                 alert("Doble click realizado");
    //             }
    //             clickCount = 0; // Restablecer contador
    //         }, delay);
    //     }
    // });


    // //mouse over:
    // const botton = document.querySelector(".boton")
    // const cont1 = document.querySelector(".contenedor1")
    // const cont2 = document.querySelector(".contenedor2")


    // cont1.addEventListener("mouseover", (e) =>{
    //     alert("Mouse sobre el contenedor rojo")
    // })

    // cont2.addEventListener("mouseover", (e) =>{
    //     alert("Mouse sobre el contenedor azul")
    // })
    // cont2.addEventListener("mouseout", (e) =>{
    //     alert("Saliste del contenedor azul")
    // })
    // cont2.addEventListener("contextmenu", (e) =>{ // Es cuando se da click derecho en la posición
    //     alert("diste click derecho")
    // })
    // cont2.addEventListener("mouseup", (e) =>{ // es como el click pero cuando lo sueltas
    //     alert("soltaste el click")
    // })
    // cont2.addEventListener("mousedown", (e) =>{ // No importa si no se soltó el click, igual se ejecutará
    //     alert("diste click")
    // })



    // const input = document.querySelector(".input-prueba")
    // const cont1 = document.querySelector(".contenedor1")



    // input.addEventListener("keydown",(e)=>{ // detecta si la tecla fue presionada
    //     console.log("una tecla fue presionada")
    // })

    // input.addEventListener("keypress",(e)=>{ // detecta si la tecla fue presionada
    //     console.log("Un usuario presionó una tecla")
    // })

    // input.addEventListener("keyup",(e)=>{ // detecta si la tecla fue soltada en el mismo lugar
    //     console.log("una tecla fue soltada")
    // })

    const img = document.querySelector(".img-prueba")


    // img.addEventListener("error", ()=>{
    //     console.log("a error happend")
    // })


    window.addEventListener("load", () =>{ // para ejecutar cuando se carga algo, en este caso, la pagina 
        console.log("ha cargado el body")
    })

    window.addEventListener("beforeunload", () =>{ // ejecucición cuando abandonas el sitio
        console.log("te estás yendo de la pagina")
    })
    
    window.addEventListener("unload", () =>{ // ejecucición antes de que abandones el sitio
        console.log("te estás yendo de la pagina")
    })
    window.addEventListener("resize", () =>{ // ejecucición antes de que abandones el sitio
        console.log("redimensionaste la ventana")
    })
    window.addEventListener("scroll", () =>{ // ejecucición antes de que abandones el sitio
        console.log("scrolleando")
    })




const p1 = new Promise ((res, rej)=>{
    let resultado = false

    if(resultado == true){
        res("true")
    }else{
        rej("error")
    }

})



p1.catch((rej)=>{
    console.log(rej)
})