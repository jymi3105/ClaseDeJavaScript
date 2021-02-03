var uideMuchos=new Array;
var ale = 0;
for (let j = 0; j < 10; j++) {
    var uuid = "";
    for (let i = 0; i < 36; i++) {
        if (i != 8 && i != 13 && i != 18 && i != 23) {
            ale = Math.ceil(Math.random() * 16);
            hexString = ale.toString(16).toUpperCase();
            uuid += hexString;
        } else {
            uuid += "-";
        }
    }
    uideMuchos[j]=uuid;
}
console.log(uideMuchos);
