var examen = '{"preguntas":[\
    {"codigo":0,"enunciado":"La capital de España es...","respuesta1":"Madrid", "respuesta2":"Barcelona","respuesta3":"Sevilla","correcta":"1"},\
    {"codigo":1,"enunciado":"La suma de dos y dos son...", "respuesta1":"3", "respuesta2":"4","respuesta3":"5","correcta":"2"},\
    {"codigo":2,"enunciado":"El rio Pisuerga pasa por...","respuesta1": "Murcia","respuesta2":"Almería", "respuesta3":"Valladolid","correcta":"3"},\
    {"codigo":3, "enunciado": "El día de Navidad es el 25 de...","respuesta1": "Enero", "respuesta2":"Noviembre","respuesta3":"Diciembre","correcta":"3"},\
    {"codigo":4,"enunciado":"El número de módulos en segundo de DAW es...","respuesta1":"4","respuesta2":"5","respuesta3":"6","correcta":"2"}\
    ]}';

var respAlumnos = '{"examenes":[\
    {"nombre":"marcos","respuestas":[\
    {"codigo":"0","respuesta":"1"},\
    {"codigo":"1","respuesta":"2"},\
    {"codigo":"2","respuesta":"3"},\
    {"codigo":"3","respuesta":"3"},\
    {"codigo":"4","respuesta":"2"}\
    ],\
    "puntuacion":"0"},\
    {"nombre":"ana","respuestas":[\
    {"codigo":"0","respuesta":"1"},\
    {"codigo":"1","respuesta":"2"},\
    {"codigo":"2","respuesta":"3"},\
    {"codigo":"3","respuesta":"3"},\
    {"codigo":"4","respuesta":"2"}\
    ],\
    "puntuacion":"0"}\
    ]}';
objExamen = JSON.parse(examen);
/*
var puntuacion = 0;
function accessObject(obj, route = "") {
    let codigoPregunta2;
    let respuestaDada2;
    if (JSON.stringify(obj) != '{}') { //¿Está vacío el objeto?
        for (x in obj) { //Si no está vacío lo recorro
            if (typeof (obj[x]) == typeof ({})) { //¿La propiedad es de tipo objeto?

                if (obj[x] != null) { //¿Es nulo el objeto?
                    accessObject(obj[x], route + " -> " + x); //Si es un objeto que no es nulo llamamos al método de forma recursiva

                }
            } else {
                if (x == "nombre") {
                    puntuacion = 0;
                }
                if (x == "codigo") {
                    codigoPregunta2 = obj[x];
                }
                if (x == "respuesta") {
                    respuestaDada2 = obj[x];
                }
               
                if (typeof ((codigoPregunta2) != "undefined") && (typeof (respuestaDada2) != "undefined")) {
                    if (comprobare(codigoPregunta2, respuestaDada2)) {
                        puntuacion++;
                    }
                    console.log(codigoPregunta2 + "  " + respuestaDada2 + "  " + comprobare(codigoPregunta2, respuestaDada2));

                }

                if (x == "puntuacion") {
                    obj[x] = puntuacion;
                }
                console.log(route + " - " + x + " -----> " + obj[x]); //Si es un dato primitivo lo imprimo junto con su ruta

            }
        }
    } else {
        console.log(obj)
    }
}
accessObject(objRespAlumnos);
*/
objRespAlumnos = JSON.parse(respAlumnos);





//var respAlumnos =JSON.stringify(objRespAlumnos);
//console.log(respAlumnos);
function comprobare(codigoPregunta, respuestaDada) {
    let bandera = true;
    for (let x in objExamen) {

        if (typeof (objExamen[x]) == "object") {
            for (let y in objExamen[x]) {
                if (typeof (objExamen[x][y]) == "object") {
                    for (let j in objExamen[x][y]) {
                        if (j == "codigo") {
                            if (codigoPregunta == objExamen[x][y][j]) {
                                bandera = true;
                                for (let l in objExamen[x][y]) {
                                    if (l == "correcta") {
                                        if (respuestaDada == objExamen[x][y][l]) {
                                            bandera = true;
                                            break;
                                        } else {
                                            bandera = false;
                                        }
                                    }
                                }
                            } else {
                                bandera = false;
                            }

                        }
                    }
                }
            }
        }
    }
    return bandera;
}

console.log(comprobare(2, 1));
console.log(comprobare(2, 2));
console.log(comprobare(2, 3));
console.log(comprobare(2, 4));