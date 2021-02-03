var expresionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
var miEmail="@@jy_.-mi@hotmail.es";
console.log("El mail es: " + miEmail + " " + expresionEmail.test(miEmail));
//primera expresion para validar email
function validarEmail1(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     console.log("La dirección de email " + valor + " es correcta.");
    } else {
     console.log("La dirección de email es incorrecta. " + miEmail);
    }
  }

  validarEmail1(miEmail);
  /*
  Escribir un parrafo, lo metemos en una variable, y nos tiene que decir cuantas parabras hay de 1,2,3,4,5 o mas letras

  */ 