const materias ={
    fisica: ["D.Hidalgo","pedro", "pepito", "cofla", "maria"],
    programacion: ["D.Sanchez","pedro", "juan", "pepito"],
    logica: ["D.Bustamante", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["D.Zamora","pedro", "juan", "pepito", "cofla", "maria"]
}
const obtenerInformacion = (materia) =>{
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias[materia][0] ];
    }else{
        return false;
    }

}

let informacion = obtenerInformacion("fisica");
let info_string = informacion[0].join(", ");


const recorrerData = () => {
    let sub_list = Object.keys(materias);
    document.write("Courses:" + "<br> <br>")
    for(each of sub_list){
        let data = obtenerInformacion(each)[0];
        let only_s = data.slice(1,data.length)
        document.write(`${each}:<br>
            teacher: ${obtenerInformacion(each)[2]} <br>
            students: ${only_s.join(", ")} <br>
            `)
        document.write(`<br>`)
    }


}

recorrerData();
