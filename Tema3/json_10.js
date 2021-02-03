//json_10.js --> Ejercicio: pasar a mayúsculas un JSON

var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
text = text.toUpperCase();

var objeto = JSON.parse(text, function (key, value) {
	
		if (typeof value === "string" && key=="STREET")
			return value.toLowerCase();
	
	return value;
});

var textoFinal = JSON.stringify(objeto, null, 3);

console.log(textoFinal);