var expresion=/ho*l*a*/;
console.log(expresion.test("hola"));
console.log(expresion.test("holfsdloa"));
console.log(expresion.test("hoa"));
console.log(expresion.test("oa"));

var strong="¿Cumple con la expresion regular? ";
var expresion1=/^[^AEIOU]{3}$/;
var expresion2=/^[A-Z]{3}$/;
var cadena="SDG";
console.log("alksd");
console.log(strong + (expresion1.test(cadena) && expresion2.test(cadena)));

var dni='71104635c';
var expresion4=/^\d{8}[A-Z]$/;

var telefono="947508309";
var expresion5=/^[679][0-9]{8}$/;

var expresionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
var miEmail="jymi@hotmail.es";
console.log(expresionEmail.test(miEmail));

function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     console.log("La dirección de email " + valor + " es correcta.");
    } else {
     console.log("La dirección de email es incorrecta. " + miEmail);
    }
  }
  validarEmail(miEmail);