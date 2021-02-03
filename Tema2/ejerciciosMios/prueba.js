var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true