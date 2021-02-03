var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);


/*myRe = /d(b+)d/g;
myArray = myRe.exec('aaadbd');
console.log(myArray);*/
