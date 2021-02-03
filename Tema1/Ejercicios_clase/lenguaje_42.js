//lenguaje_42.js - Funciones: Creadas a partir del constructor del objeto Function

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/Funci%C3%B3n

//Dentro del cuerpo del srgumento de la funcion, se pueden meter las instrucciones de la funcion.
//y todo el return de la funcion se puede asignar a una variable.
//Y para llamar a la funcion, se pone la variable pasandole los argumentos que necesite la funcion
var multiplicar1 = new Function('x','y','z','return x*y*z');
console.log(multiplicar1(5,6,7));

var multiplicar2 = new Function('a,b,c','return a*b*c');
console.log(multiplicar2(3,7,5));

//Todas las funciones en JavaScript son un objeto
console.log(typeof((function(){}).constructor));