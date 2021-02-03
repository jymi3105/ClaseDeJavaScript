const distVueltas = 7000;
const vueltasTotaltes = 8;

function coche(nombre, potencia, combustible) {
    this.nombre = nombre;
    this.potencia = potencia;
    this.combustible = combustible;
    this.tiempo = 0;
    this.tiempoAux=0;
    this.vueltas = 0;
    this.recorrido = 0;
    this.tiempoVuelta = [];

    this.acelerar = function () {
        if (this.combustible > 0) {
            var acelerado = Math.floor(Math.random() * this.potencia);
            this.recorrido += acelerado;
            this.tiempoAux++;
            this.tiempo++;
            this.combustible = this.combustible - acelerado * 0.000999; //Factor de consumo
        }
    }
}

var carrera = [];
carrera.push(new coche("c1", 110, 62));
carrera.push(new coche("c2", 100, 70));
carrera.push(new coche("c3", 120, 80));
carrera.push(new coche("c4", 130, 60));
carrera.push(new coche("c5", 140, 65));
carrera.push(new coche("c6", 150, 70));
carrera.push(new coche("c7", 105, 60));

while (carrera.every(y => y.vueltas < vueltasTotaltes)) {
    if (carrera.every(x => x.combustible <= 0)) {
        console.log("todos sin combustible");
        break;
    }

    carrera.forEach(x => { x.acelerar(); });

    if (carrera.some(x => {
        if (x.recorrido >= distVueltas) {
            x.vueltas++;
            x.recorrido = x.recorrido - distVueltas;
            x.tiempoVuelta.push(x.tiempoAux);
            x.tiempoAux=0;
        }
    }));
}

//RESULTADOS DE LA CARRERA
carrera.forEach(x => console.log(x.nombre + "-->" + x.recorrido + "-->" + x.combustible + "-->" + x.tiempo));
carrera.forEach(x => console.log("TIEMPO EN CADA VUELTA: " + x.tiempoVuelta));
carrera.forEach(x => {

    if (x.vueltas == vueltasTotaltes) {
        console.log("GANADOR --> " + x.nombre);
    }
})
