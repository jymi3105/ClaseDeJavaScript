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
    {"codigo":"1","respuesta":"1"},\
    {"codigo":"2","respuesta":"1"},\
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
var plantilla = [];
var aprobados = 0;
var suspensos = 0;
objExamen = JSON.parse(examen, function (k, v) {
    if (k == "codigo") {
        plantilla[v] = this.correcta;
    }
    return v;
});
var objRespuestas = JSON.parse(respAlumnos, function (k, v) {

    if (k == "respuestas") {
        resuestasAlumno = [];
        contador = 0;
        this.respuestas.forEach(element => resuestasAlumno.push(element.respuesta));
        for (let i = 0; i < plantilla.length; i++) {
            (resuestasAlumno[i] == plantilla[i]) ? contador++ : contador = contador;

        }
        this.puntuacion = contador;
        estadistica(contador);
    }

    return v;
});

function estadistica(nota) {
    (nota < 5 ? aprobados++ : suspensos++)
}

console.log("el numero de aprobados es de: " + aprobados + " Y el numermo de suspensos es de: " + suspensos + ".")

resuestasAlumno=JSON.stringify(objRespuestas,null, 5);
console.log(resuestasAlumno);