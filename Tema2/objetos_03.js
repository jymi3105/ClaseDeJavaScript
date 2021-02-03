//objetos_03.js - Notación literal

//Creción de objetos con notación literal (inicializadores de objetos)
var coche = {
    marca:"opel",
    modelo:"corsa",
    precio:8000,
    color:"verde",
    potencia:80,
    3:"prueba1", //Número
    "cadena":"prueba2" //Cadena literal
}

console.log("LAS PROPIEDADES SE VISUALIZAN IGUAL");
//Con la siguiente instruccion sacaremos todos los nombres de las instrucciones
var propiedades = Object.keys(coche); //Ojo con el orden
console.log(propiedades);
propiedades.forEach(x => console.log(" --> " + coche[x]));
//Acceso a las dos últimas propiedades
console.log(coche["3"]);
console.log(coche["cadena"]);


//Añadir propiedades
console.log("\n\nAÑADIR PROPIEDADES");
coche.garantia = 2;
propiedades = Object.keys(coche);
console.log("Propiedades despues de añadir: " + propiedades);


//Objetos con propiedades que son objetos
console.log("\n\nPROPIEDADES QUE SON OBJETOS");
var persona = {
    nombre : "Luis",
    edad : 20,
    direccion: {
        calle: "mirabel",
        numero: 20
    }
}

console.log(persona.direccion.calle);
console.log(persona.direccion.numero);
propiedades = Object.keys(persona);
console.log("Mas propiedades añadidas: " + propiedades);
propiedades.forEach(x => console.log(" --> " + persona[x]));
propiedades = Object.keys(persona.direccion);
console.log("Despues de añadir la direccion: " + propiedades);
propiedades.forEach(x => console.log(" --> " + persona.direccion[x]));