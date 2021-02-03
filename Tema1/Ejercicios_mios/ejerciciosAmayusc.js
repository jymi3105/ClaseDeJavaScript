var cadena = "esto es una cadena";
var nuevaCadena = "";
nuevaCadena += cadena.charAt(0).toUpperCase();
for (let i = 0; i < cadena.length; i++) {

    if (cadena.charCodeAt(i) == 32) {
        nuevaCadena += cadena.charAt(i + 1).toUpperCase();
    } else {
        nuevaCadena += cadena.charAt(i + 1);
    };
}

console.log(cadena);
console.log(nuevaCadena);

