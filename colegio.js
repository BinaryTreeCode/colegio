
var biologia = {
    nombre: "Biología",
    bloque: "C",
    avance: "evaluación",
    nota: "nesecito clase",
};
var medioAmbiente = {
    nombre: "Medio Ambiente",
    bloque: "C",
    avance: "taller de competencias",
    nota: "no hay niguna nota al respecto",
};
var quimica = {
    nombre: "Química",
    bloque: "C",
    avance: "evaluación",
    nota: "nesecito clase",
};
var ciencias = [biologia, medioAmbiente, quimica];

var libro = {
    nombre: "Libro cambridge",
    bloque: "12",
    avance: "inicio de la 12",
    nota: "la profesora me a puesto actividades extra pero una era por " + 
    "que la necetitaba para mejorar con lo de los numeros",
};
var actividades = {
    nombre: "Actividades extra",
    bloque: "no se",
    avance: "no se",
    nota: "no se bien como funciona",
};
var ingles = [libro, actividades];


var comunicación = {
    nombre: "Comunicación",
    bloque: "D",
    avance: "nicio de TDC",
    nota: "nesecito TDC",
};
var metodología = {
    nombre: "Metodología",
    bloque: "A",
    avance: "sustentación",
    nota: "voy en el bloque a + la nota de la feria  = bloque B, " +
    "falta sutención y proyecto por lo que nesecito clase, para evaluar el TDC",
};
var producción = {
    nombre: "Producción",
    bloque: "C",
    avance: "proyecto",
    nota: "no hay niguna nota al respecto",
};
var lenguaje = [comunicación, metodología, producción];


var trigo = {
    nombre: "Trigonometría",
    bloque: "C",
    avance: "marco",
    nota: "no hay niguna nota al respecto",
};
var estadística = {
    nombre: "Estadística",
    bloque: "C",
    avance: "incio del TDC",
    nota: "voy en el bloque b + la nota de la feria = bloque C, " +
    "solo nesitaria el TDC para empezarlo"
};  
var financieras = {
    nombre: "Matemáticas Financieras",
    bloque: "A",
    avance: "sunstentación",
    nota: "falta resolver una duda de un punto y sustentar y evaluar",
};
var fisica = {
    nombre: "Física",
    bloque: "b",
    avance: "inicio del TDC",
    nota: "nesecito TDC, se habla con cesar",
};
var sitemas = {
    nombre: "Sistemas",
    bloque: "D",
    avance: "inicio del TDC",
    nota: "nesecito TDC",
};
var dibujo = {
    nombre: "Dibujo técnico",
    bloque: "C",
    avance: "inicio del TDC",
    nota: "nesecito TDC hay que cuadrar con el profesor Cesar",
};
var animaplanos = {
    nombre: "animaplanos",
    bloque: "1",
    avance: "mas de la mitad",
    nota: "falta el 1 y el 2",
}; 
var matematicas = [trigo, estadística, financieras, 
    fisica, sitemas, dibujo, animaplanos];

    
var economicas = {
    nombre: "ciencias economicas",
    bloque: "C",
    avance: "inicio del TDC",
    nota: "tengo el TDC",
};  
var politicas = {
    nombre: "ciencias politicas",
    bloque: "C",
    avance: "taller",
    nota: "tengo que entregar el marco",
};
var filosofia = {
    nombre: "filosofia",
    bloque: "C",
    avance: "sustentación",
    nota: "creo falta la sustentación y evaluación; y voy atrasado " +
    "en sociales por casi no he tenido clase.",
};
var sociales = [economicas, politicas, filosofia];



var dataBase = [ciencias, ingles, lenguaje, matematicas, sociales];

let i = 0;
while (i < dataBase.length-1) {
    console.log(dataBase[i]);
    i++;
}

    const app = document.getElementById('AAP');


dataBase.forEach(function(element) {
    element.forEach(function(element) {
        //console.log( `${element.nombre} voy en el bloque ${element.bloque} falta ${element.avance} / Nota:${element.nota}`);
        app.innerHTML += `<p>En ${element.nombre} voy en el bloque ${element.bloque} falta ${element.avance} <br> Nota:${element.nota} </p>`;
    })});


// eval (de texto para recorrer arays y objetos)
// var VDA = false;
// verificador_de_años = function () {
//     años.forEach(element : {
//         if (element.name !== temp.año) {
//             VDA = true;
//         }
//         else {
//             VDA = false;
//         }
//     });
// if (VDA === true) {
//     años.push(new año());
// }
// else {
//     console,log("año ya existente");
// }
// }

// var TDCS = prompt("cuantos TDCS faltan?");
// var desempeño = 1;
// var TDC = 5;
// var desempeños;
// var dias;
// function resultado() {
//     desempeños = TDCS * TDC;
//     dias = desempeños / desempeño;
//     meses = dias / 30;
//     console.log("faltan mas " + meses + " meses para completar el Bloque C");
// }
// resultado();
