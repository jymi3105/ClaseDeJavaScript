//objetos_02.js - Recorrer un objeto

//Recorrer un objeto
var persona1 = new Object();

persona1.nombre = "Fernando";
persona1.edad = 30;
persona1.pais = "España";
persona1.telefono = "987654321";
persona1.email = "persona@correo.com";
persona1.nombreyedad = function () {
    return "El nombre es " + this.nombre + " y la edad es " + this.edad;
}


//MÉTODO 1 --> for..in
//Con este metodo recorro todas las propiedades del objeto
console.log("MÉTODO 1  --> for..in");
for(let x in persona1) {
    console.log(x + " - " + persona1[x]);
}


//MÉTODO 2 --> Object.keys(o) --> Devuelve el array de propiedades enumerables
console.log("\n\nMÉTODO 2 --> Object.keys(o)");
var propiedades = Object.keys(persona1);
//con la siguiente instruccion saco el nombre de las propiedades de los objetos
console.log("Las propiedades son: " + propiedades);
//Con este bucle le metemos una funcion callback y recorre todas las propiedades
propiedades.forEach(x => console.log(" --> " + persona1[x]));


//MÉTODO 3 --> Object.getOwnPropertyNames(o) --> Devuelve el array de propiedades
console.log("\n\nMÉTODO 3 --> Object.getOwnPropertyNames(o)");
//Con este metodo voy a asignar a propiedades2, el nombre de las propiedades de persona1
var propiedades2 = Object.getOwnPropertyNames(persona1);
console.log("Propiedades2: " + propiedades2);
propiedades2.forEach(x => console.log(" --> " + persona1[x]));