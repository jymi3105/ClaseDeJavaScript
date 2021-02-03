function leerCookie(clave) {
    var resultado = "";
    var busqueda = clave + "=";
    var listCookies = document.cookie.split(';');
    var par = "";
    for (var i = 0; i < listCookies.length; i++) {
        par = listCookies[i]; //Cada elemento del array de cookies: nombre de la cookie y carácter =
        while (par.charAt(0) == ' ') {
            par = par.substring(1);
        }
        if (par.indexOf(busqueda) == 0) {
            resultado = par.substring(busqueda.length, par.length);
        }
    }
    return resultado;
}

function eliminarCookie(clave) {
    //document.cookie = clave + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = clave + "=; max-age=0";
}

function eliminarTodasCookies() {
    var listaCookies = document.cookie.split(';');
    var clave = "";
    for (i = 0; i < listaCookies.length; i++) {
        clave = listaCookies[i].split('=')[0].trim();
        document.cookie = clave + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
}

function leerCookie(clave) {
    var resultado = "";
    var busqueda = clave + "=";
    var listCookies = document.cookie.split(';');
    var par = "";
    for (var i = 0; i < listCookies.length; i++) {
        par = listCookies[i]; //Cada elemento del array de cookies: nombre de la cookie y carácter =
        //Se quitan los espacios en blanco 
        while (par.charAt(0) == ' ') {
            par = par.substring(1);
        }
        if (par.indexOf(busqueda) == 0) {
            resultado = par.substring(busqueda.length, par.length);
        }
    }
    return resultado;
}

function ponerUnaCookie(clave, valor, dias = 0) {
    var miCookie = "";
    if (dias > 0) {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        var expires = "expires=" + fecha.toUTCString();

        miCookie = clave + "=" + valor + ";" + expires; //PERMANENTE
    } else {
        miCookie = clave + "=" + valor; //SESIÓN
    }
    document.cookie = miCookie;
}







