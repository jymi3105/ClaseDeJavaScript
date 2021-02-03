var boleto=[35,12,54,35,174,4,398,3];
var n, aux;
n=boleto.length;
console.log(boleto.sort());

for (i = 1; i < n; i++) {
    
    for (k = 0; k < (n-1); k++) {
        
        if (boleto[k]>boleto[k+1]) {
            aux=boleto[k];
            boleto[k]=boleto[k+1];
            boleto[k+1]=aux;
        }
        
    }
    
}
console.log(boleto);

/*var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
var n, i, k, aux;
n = lista.length;
console.log(lista); // Mostramos, por consola, la lista desordenada
// Algoritmo de burbuja
for (k = 1; k < n; k++) {
    for (i = 0; i < (n - k); i++) {
        if (lista[i] > lista[i + 1]) {
            aux = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = aux;
        }
    }
}

console.log(lista); // Mostramos, por consola, la lista ya ordenada*/
