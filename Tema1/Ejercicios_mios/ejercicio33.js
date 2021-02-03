var numeros = [1, 2, 5, 9, 11, 6, 5, 5, 4, 8];

console.log(numeros);
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );
console.log(arr);
var numeros2 = [2];
function checkAr(num) {
    return num >= 5;
}
console.log(numeros.filter(checkAr));