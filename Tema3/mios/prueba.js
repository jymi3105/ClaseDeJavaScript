var numbers = [4, 22, 5, 1, 3];

numbers.sort(function(a, b) {
    if (a < b) {
      return 1;
    }
    if (a >b) {
      return -1;
    }
    // a debe ser igual b
    return 0;
  }
)

console.log(numbers);