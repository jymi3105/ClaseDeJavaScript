//OBJETO VACIO
var aula={};

console.log(aula);
console.log(typeof(aula));
//POR DEFECTO AQUI NO SERAN ENUMERABLES
Object.defineProperty(aula, "numeroPupitres", {value:16, enumerable:true});
//AQUI EL ENUMERABLE SERA TRUE
aula.numeroAlumnos=12;
console.log("=================");
console.log(aula);

Object.defineProperties(aula,
    {
        superficie:{
            value:60, enumerable:true
        },
        nombre:{
            value:"informatica", enumerable:false
        }
    });
    console.log(aula);