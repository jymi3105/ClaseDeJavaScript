//objetos_18.js - call

//Ejemplo1 --> Básico
console.log("EJEMPLO1 -- BÁSICO");
var coche = {
    marca:"seat",
    modelo:"ibiza",
    caracteristicas : function() {return "Marca: " + this.marca + " Modelo: " + this.modelo;}
}

var coche1 = {
    marca:"opel",
    modelo:"corsa"
}

var coche2 = {
    marca:"renault",
    modelo:"clio"
}
// desde un obkjeto se puede llamar a otro, aplicandole su metodo, en este caso eel del coche
console.log("Con las coche.caracteristicas: " + coche.caracteristicas());
console.log("Llamando al call(): " + coche.caracteristicas.call(coche1));
console.log("Llamando al call(): " + coche.caracteristicas.call(coche2));

//Ejemplo2 --> Puede recibir argumentos
console.log("\n\nEJEMPLO2 -- PUEDE RECIBIR ARGUMENTOS");
var persona = {
    nombre:"Tomas",
    informacion: function(edad) {return this.nombre + " -  " + edad;}
}

var persona1 = {
    nombre:"luis"
}

console.log(persona.informacion.call(persona1, 30));
