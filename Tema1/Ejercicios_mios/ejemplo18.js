v1 = 3;
v2 = "3";
if (v1 != v2) {
    console.log(v1 + " es distinto de " + v2);
} else {
    console.log(v1 + " es igual sin importar el tipo de dato que " + v2);
}

if (v1 !== v2) {
    console.log(v1 + " es distinto tipo de dato que " + v2);
} else {
    console.log(v1 + " es igual que " + v2);
}

valorVerdadero = true;
valorFalso = false;
valorVerdadero && console.log("imprime porque es verdadero");
valorFalso && console.log("no imprime porque es false");

valorVerdadero || console.log("imprime porque es verdadero");
valorFalso || console.log("imprime porque es false con||");

resultado = (true) ? "Es verdadero con operado ternario" : "Es falso";
console.log(resultado);
resultado = (false) ? "Es verdadero con operado ternario" : "Es falso con operador ternario";
console.log(resultado);
x = 1;
y = 2;
mayor = (x > y) ? x : y;
console.log(mayor);
console.log("BUCLE CON CONTINUE")
i = 1;
while (i <= 10) {
    i++;
    if (i == 5) {
        console.log("Aqui no me imprime el 5");
        continue;
    }
    console.log(i);
    //i++;
}