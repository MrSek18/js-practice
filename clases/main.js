// class celulares {
//     constructor(color, peso, rdp, rdc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.rdp = rdp;
//         this.rdc = rdc;
//         this.ram = ram;

//         this.encendido = false;
//     }
//     pbe(){
//         if(this.encendido == false){
//             this.encendido = true;
//             console.log("Telefono encendido")
//         }
//     }
//     pba(){
//         if(this.encendido == true){
//             this.encendido == false
//             console.log("Telefono apagado")
//         }
//         else{
//             console.log("El telefono está apagado")
//         }
//     }
//     restart(){
//         if(this.encendido == false){
//             console.log("Está apagado")
//         }
//         else{
//             console.log("reiniciando...")
//             console.log("Dispositivo encendido")
//         }
//     }
//     tomarfoto(){
//         if(this.encendido == false){
//             return undefined;
//         }else{
//             alert(`Foto tomada en una resolucion de: ${this.rdc}`)
//         }
//     }
//     grabarvideo(){
//         alert(`Video grabado en una resolucion de: ${this.rdc}`)
//     }

// }



// let celular1 = new celulares("azul", "80g", "100px","50mgpx", "8gb");

//--------------------------

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color}`;
    }
    verInfo(){
        console.log(this.info)
    }

}

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
        this.info = this.info.concat(`, y soy de raza ${this.raza}`)
    }

    set setRaza(new_race){
        this.raza = new_race
    }

    get getRaza(){

        return this.raza;

    }

    // static name() No necesita que la clase se defina para poder ser creado y ejecutado
    // static ladrar(){
    //     alert("WAAW!");
    // }
}


const perro1 = new perro("perro", 7, "caramelo", "pitbull")

const animal1 = new animal("perro", "7", "caramelo")

perro1.setRaza = "Siberiano";

document.write(perro1.getRaza)









//--------------------------

// Promesas

// let p = new Promise((res, rej)=>{
//     setTimeout(()=> res(celular1.tomarfoto()), 5000);

//     celular1.pbe();
// });

// let p1 = new Promise((res, rej)=>{
//     res("este problema se resolvió");
//     rej("este problema no se resolvió");
// });




// p1.then(res => console.log(res))

// p1.catch(error=>
//     console.error(error)
// )
