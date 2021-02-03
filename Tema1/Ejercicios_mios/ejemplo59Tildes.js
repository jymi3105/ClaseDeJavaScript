var textoTildes="Las palabras esdrújulas llevan tilde, como por ejemplo murciélago. ángel, óscar son nombre propios con tilde";
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

  var textoSinTilde=removeAccents(textoTildes);
  console.log(textoSinTilde);
  console.log(textoTildes);

  var textoSinTilde2=quitarAcentos(textoTildes);
  console.log(textoSinTilde2);
  var nuevaCadena="è";
  console.log(nuevaCadena.normalize('NFKD'));