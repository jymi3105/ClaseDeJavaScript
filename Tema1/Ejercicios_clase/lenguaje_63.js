//lenguaje_63.js - Expresiones regulares: Declaración y propiedades

//ignoreCase
console.log("EJEMPLO DE IGNORECASE");
//En esta expresion dice que tiene que tener obligatoriamente la A donde sea, y además de ser mayuscula
var expresion1 = /A/;
var expresion2 = /A/i;
console.log(expresion1.test("casa") ); //false
console.log(expresion2.test("casa") ); //true


//multiline
console.log("EJEMPLO DE MULTILINE");
//El simbolo ^ nos quiere decir que obligatoriamente tiene que empezar con lo que le sigue a continuacion.
var expresion3 = /^coche/;
var expresion4 = /^coche/m;
console.log(expresion3.test("casa\ncoche") ); //false
console.log(expresion4.test("casa\ncoche") ); //true


//unicode
console.log("EJEMPLO DE UNICODE");
var expresion5 = /\u{73}/; // Es la s
var expresion6 = /\u{73}/u;
console.log(expresion5.test("casa") ); //false
console.log(expresion6.test("casa") ); //true
console.log(expresion6.test("coche") );  //false


//lastIndex (propiedad)
var str = "The rain in Spain stays mainly in the plain.....";
var expresion7 = /ain/;
var expresion8 = /ain/g;
console.log(str );
//En la expresion 7 como no aplicamoso el global, el lastIndex de la expresion, simpre sera el mismo
console.log(expresion7.test(str) + " --> lastIndex: " + expresion7.lastIndex ); //0
console.log(expresion7.test(str) + " --> lastIndex: " + expresion7.lastIndex );
console.log(expresion7.test(str) + " --> lastIndex: " + expresion7.lastIndex);
//En esta expresion como usamos el global, con el test se va moviendo por la cadena y por eso
//nos va dando un lastIndex distinto
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex ); //8
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex ); //17
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex ); //28
//Ademas el lastIndex lo podemos reiniciar donde queramos
expresion8.lastIndex = 15;
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex ); //28
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex ); //43
//hasta que llega al final de la cadena, nos acaba dando false, y vulve a comenzar desde el principio de la cadena
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex); //false,0
//Y aqui nos vuelve a dar true
console.log(expresion8.test(str) + " --> lastIndex: " + expresion8.lastIndex);

			

//global
console.log("EJEMPLO DE GLOBAL");
var expresion10 = /ain/g; //Si se prescinde de la g se produce un bucle infinito
while (expresion10.test(str)==true) {
	console.log("'ain' encontrado. Índice ahora en: "+expresion10.lastIndex );
}