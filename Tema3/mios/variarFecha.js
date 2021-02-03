/*cumpleanios = {
    fecha1: new Date(1996-2-14),
    fecha2: new Date(1996-2-14),
    fecha3: new Date(1996-2-14)
}

var text2=JSON.stringify(cumpleanios);
console.log(text2);*/

var text = '[{"nombre":"pepe", "fecha":"1996-02-14"},{"nombre":"pepa", "fecha":"1992-02-11"}, {"nombre":"pepiyo", "fecha":"1990-02-23"}]';
obj = JSON.parse(text, function(key, value){
    if (key) {
        
    }
});


for (x in obj) {
    console.log(obj[x]);
}
