let materias = {
    fisica: [90, 6, 3, "fisica"],
    matematica: [84, 8, 2,"matematica"],
    logica: [75, 9, 7, "logica"],
    quimica: [92, 8, 4, "quimica"],
    calculo: [96, 8, 3, "calculo"],
    programacion: [91, 6, 4,"programacion"],
    biologia: [79, 7, 2,"biología"],
    db: [98, 9, 1, "db"],
    algebra: [100, 10, 4, "algebra"]
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

            console.log(materias[materia][3])

        if(asistencia >= 90){
            console.log("%c   asistencia en orden", "color:green")
        } else{
            console.log("%c   falta de asistencias", "color:red")
        }
        if(promedio >= 7){
            console.log("%c   promedio en orden", "color:green")
        }else{
            console.log("%c   promedio desaprobado", "color:red")

        }
        if(trabajos >= 3){
            console.log("%c  Trabajos Practicos en orden", "color:green")
        }else{
            console.log("%c   Faltan trabajos prácticos", "color:red")

        }
    }
}

aprobo()