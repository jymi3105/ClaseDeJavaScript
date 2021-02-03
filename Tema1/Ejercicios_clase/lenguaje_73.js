//lenguaje_73.js - Objeto Date: Básico

var fecha1 = new Date(); //Devuelve la fecha del sistema
var fecha2 = new Date(-347205675600);
var fecha3 = new Date("April 15, 2012 15:00:00"); //Fecha en formato cadena reconocible por el método parse
var fecha4 = new Date(2019,4); //año, mes (obligatorios, no da error si se omite el mes)
var fecha5 = new Date(2019,8,21,17,34,23,345);

console.log('fecha1: ' + fecha1.toString());
console.log('fecha2: ' + fecha2.toString());
console.log('fecha3: ' + fecha3.toString());
console.log('fecha4: ' + fecha4.toString());
console.log('fecha5: ' + fecha5.toString());

//Otras formas de ver la fecha: métodos toString
console.log(fecha1.toDateString()); //Formato americano
			
console.log('toGMTString: ' + fecha1.toGMTString()); //Obsoleta
			
console.log('toUTCString: ' + fecha1.toUTCString());
			
console.log('toISOString: ' + fecha1.toISOString());

var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log('toLocaleDateString: ' + fecha1.toLocaleDateString('es-ES', opciones));

console.log('toLocaleTimeString: ' + fecha1.toLocaleTimeString()); //La hora únicamente

console.log('toLocaleString: ' + fecha1.toLocaleString());