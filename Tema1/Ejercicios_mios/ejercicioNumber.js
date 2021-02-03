var numeros=[1, 2, 5, 9, 6, 54];
function sonNumeros(tipo){
    return typeof(tipo)==String;
}

console.log(numeros.every(sonNumeros));