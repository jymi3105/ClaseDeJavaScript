/*
A partir de una cadena de texto en formato CSV obtener un array bidimensional 
ordenado con los siguientes campos:
Nombre
DNI
Código postal
Teléfono
Matrícula
Se supone que la cadena de texto contiene 25 valores separados por comas. Cada cinco valores se almacenan datos de una persona (nombre, dni, cp, teléfono y matrícula). Los 5 primeros de una persona, los 5 siguientes de otra y así sucesivamente.
El array bidimensional resultante debe tener las siguientes características:
El primer índice indica la persona
El segundo índice indica el campo de dato de cada persona por el orden especificado
*/
function ordenarCSV(texto) {
    //MIS EXPRESIONES REGULARES
    var expresionNombre = /^([A-Z]|Á|É|Í|Ó|Ú)([a-z,á,é,í,ó,ú])+(\s([A-Z]|Á|É|Í|Ó|Ú)([a-z,á,é,í,ó,ú])+)?$/;
    var expresionDNI = /^\d{8}[A-Z]$/;
    var expresionCP = /^\d{5}$/;
    var expresionTele = /^(6|7|9)\d{8}$/;
    var expresionMatricula = /^\d{4}-?[B-D,F-H,J-N,P,R-T,V-Z]{3}$/
    //Ahora lo convierto en Array
    var miArray = texto.split(",");

    //Defino el array donde voy a meter los datos recolocados
    var nuevoArrayExt = [];
    var tamanioInterno = 5;
    var tamanioTotal = miArray.length;
    for (let i = 0; i < tamanioTotal / tamanioInterno; i++) {
        //Declaro el array donde voy a ir recolocando todos los valores de la cadena inicial
        var nuevoArrayInt = [];
        for (let j = 0; j < tamanioInterno; j++) {
            //Esta es la variable que voy a evaluar con todas las expresiones
            //Aqui asigno a temporal el valor que extraigo del array
            var temporal = miArray.shift().toString();
            //Aqui voy a evaluar en que posicion del array interno lo voy a colorcar
            let valor;
            switch (true) {
                case expresionNombre.test(temporal):
                    valor = 0;
                    break;
                case expresionDNI.test(temporal):
                    valor = 1;
                    break;
                case expresionCP.test(temporal):
                    valor = 2;
                    break;
                case expresionTele.test(temporal):
                    valor = 3;
                    break;
                case expresionMatricula.test(temporal):
                    valor = 4;
                    break;

                default:
                    break;
            }
            //Coloco el valor que hemos sacado del array en la posicion donde haya coincidido con la expresion
            nuevoArrayInt[valor] = temporal;
        }
        //Meto el array interno donde he puesto los valores en el array externo
        nuevoArrayExt[i] = (nuevoArrayInt);

    }

    console.log(nuevoArrayExt);
}


//Este es el texto que luego voy a recolocar
var miTexto = "Jorge Antoniui,47012,71777735C,665112273,9834DDD,Jorgee,76804636D,47013,665112277,9835-CCC,4894-PGG,65891,965456456,12345678A,Guillermo,765321456,Ana,98456,65656565P,6545-WWW,6548-LKJ,45654862L,46587,Susana,666666666";

ordenarCSV(miTexto);

