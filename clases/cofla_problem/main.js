
// class celular{
//     constructor(color, peso, sr, cr, ram){
//         this.color = color;
//         this.peso = peso;
//         this.sr = sr;
//         this.cr = cr;
//         this.ram = ram;
//         this.on = false;
//         this.info = `El celular es de color ${this.color}, pesa ${this.peso}, tiene una resolucion de pantalla de ${this.sr} pixeles, tiene una resolucion de camara de ${this.cr} y cuenta con ${this.ram} de memoria ram`;
//     }
//     turnedOn(){
//         if(this.on == true){
//             alert("the device is already turned on");
//         }
//         alert("Wellcome again, user");
//         this.on = true;
//     }
//     restart(){
//         if(this.on == false){
//             return null;
//         }else{
//             this.on = false;
//             alert("restarting the device");
//             this.on = true;
//         }
//     }
//     takePicture(){
//         if(this.on == false){
//             return null;
//         }else{
//             alert(`picture taken at resolution of ${this.cr}`);
//         }
//     }
//     recordVideo(){
//         if(this.on == false){
//             return null;
//         }else{
//             alert(`video recorded at resolution of ${this.cr}`);
//         }
//     }
//     mostrarinfo(){
//         let info = this.info
//         console.log(info);
//     }
// }

// const celular1 = new celular("white", "192g", "720x1600", "50MP", "8gb");

// // celular1.mostrarinfo();

// // celular1.turnedOn();
// // celular1.takePicture();
// // celular1.recordVideo();


// class hePhone extends celular{
//     constructor(color, peso, sr, cr, ram, slowrecord, excamera){
//         super(color, peso, sr, cr, ram)
//         this.slowrecord = slowrecord;
//         this.faceid = false;
//         this.excamera = excamera;
//     }
//     slowrd(){
//         if(this.on == false){
//             return null;
//         }else{
//             alert(`slow recorded taken at resolution of ${this.cr}`);
//         }
//     }
//     set setfaceconfig(faceid){
//         this.faceid = faceid;
//     }

//     get getfaceconfig(){
//         return this.faceid;
//     }

//     turnedOnfaceid(face){
//         if(this.on == false){
//             return null;
//         }
//         else if(this.on == true){
//             if(this.faceid == false){
//                 alert("you haven't set up Face ID")
//             }else if(this.getfaceconfig == face){
//                 alert(`Wellcome ${face}`)
//             }else if(this.getfaceconfig != face){
//                 alert(`not reconize you, try again`)
//             }
//         }

//     }

//     takePictureexcamera(){
//         if(this.on == false){
//             return null;
//         }
//         else{
//             alert(`picture taken in 4k`);
//         }
//     }
// }

// const altagamacelular1 = new hePhone("white", "140g","1440x1080", "120MP", "16gb");

// altagamacelular1.mostrarinfo();

// altagamacelular1.turnedOn();
// altagamacelular1.setfaceconfig = "sek";
// altagamacelular1.turnedOnfaceid("sek");
// altagamacelular1.takePictureexcamera();

//----------------------------------
// app

class app{
    constructor(downloads, score, size){
        this.downloads = downloads;
        this.score = score;
        this.size = size;
        this.installed = false
        this.info = `This app has ${downloads}, has ${score} stars and weighs ${size}`;
    }
    installer(){
        if(this.installed == false){
            this.installed = true
            alert("App instalada con éxito");
        }else{
            alert(`Is already installed`);
        }
    }
    get getScore(){
        return this.score;
    }
    open(){
        if(this.installed == true){
            alert(`loading application...`);
        }else{
            return null;
        }
    }
    close(){
        if(this.installed == true){
            alert(`Exiting the app`);
        }
        else{
            return null;
        }
    }
    uninstaller(){
        if(this.installed == true){
            this.installed = false;
        }else{
            return null;
        }
    }

}

const subwaysurfers = new app(50, 5, 340);
const angry_birds = new app(20, 4.2, 229.2);
const candy_crush = new app(20, 3.9, 152.2);


const lista_de_apps = [
    subwaysurfers,
    angry_birds,
    candy_crush
]
const greeting = () => alert("Hello user");

function data(opcion){
    greeting();
    alert("there are 3 options of apps to choose: subway surfers, angry birds y candy crush");
    let option = "";
    alert(option = prompt("Write an option: "))
    let list = ["subway surfers", "angry birds", "candy crush"];
    let starsList = [subwaysurfers.score, angry_birds.score, candy_crush.score];
    console.log(starsList)

    function choosingfor(){
        for(let each of list){
            if (option == each){
                alert(`installing ${each}`);
                alert(`${each} was install`);
            }
        }
    }
    function leastRanketapp(){
        let leastedapp = Math.min(...starsList);
        console.log(leastedapp);
        if(leastedapp > 0){
            let appList = starsList;
            for(let each in appList){
                if(leastedapp == appList[each]){
                    let appname = list[each];
                    alert(`recomended for you: ${appname}`)
                    lista_de_apps[each].installer();
                }
            }
        }else{
            alert("error");
        }
    }
    if(opcion == 1){
        choosingfor();
    } else if(opcion == 2){
        leastRanketapp();
    }else{
        alert("choose an opcion between 1 and 2")
    }
}

data(2);

