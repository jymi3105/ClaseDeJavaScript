//json_02.js - Método stringify: pasar un objeto a texto JSON

var persona = {
	nombre:"luis",
	edad:34,
	apellidos:["perez","garcia"]
}

var texto = JSON.stringify(persona);

console.log("SE IMPRIME LA CADENA JSON");
console.log(texto + " y es de tipo: " + typeof(texto)); //json
console.log(persona); //objeto