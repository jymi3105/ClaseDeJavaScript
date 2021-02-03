//objetos_01.js - Notación punto y corchetes

//Creación de objetos --> Object()
//diferentes modos de acceer a las propiedades de los objetos
var persona1 = new Object();

//Acceso con notación de punto
console.log("NOTACIÓN DE PUNTO");
persona1.nombre = "Fernando";
persona1.edad = 30;
persona1.pais = "España";
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.pais);
//Si no pongo esta instruccion, cuando la llame me saldrá undefined
persona1.domicilio="casa";
console.log(persona1.domicilio); //Las propiedades no asignadas son undefined


//Acceso con notación de corchetes
console.log("\n\nNOTACIÓN CORCHETES");
persona1["telefono"] = "987654321";
console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["pais"]);
console.log(persona1["telefono"]);


//Interesante cuando las propiedades se fijan dinámicamente
console.log("\n\nFIJAR PROPIEDADES DINÁMICAMENTE");
var email = "correo";
persona1[email] = "persona@correo.com";
console.log('persona1["correo"]: ' + persona1["correo"]);
console.log('persona1.correo: ' + persona1.correo);
console.log('persona1[email]: ' + persona1[email]);
//console.log(persona1.email); //ERROR --> undefined
var propiedad; //Usamos la misma variable para acceder a distintos campos
propiedad = "nombre";
console.log(persona1[propiedad]);
propiedad = "edad";
console.log(persona1[propiedad]);


//Nombres de propiedad que no sean identificadores válidos de javascrip únicamente podrán ser usados con notación de corchetes
console.log("\n\nUSO DE IDENTIFICADORES NO VÁLIDOS");
var dni = "num?dni"; 
persona1[dni] = "12345678T";
//console.log(persona1.num?dni); //ERROR SINTÁCTICO COMO EN ESTE EJEMPLO
console.log(persona1["num?dni"]);
//Otro ejemplo
numSocio = Math.random();
persona1[numSocio] = "Aleatorio";
console.log("Utilizando el numsocio como aleatorio: " + numSocio);
console.log(persona1.Aleatorio);


//Consultar el tipo de un objeto --> object
console.log("\n\nTIPO DEL OBJETO");
console.log(typeof(persona1));