var datos = '{"solicitudes":[\
    {"codigo":0, "nombre":"Luis    ","fechanac":"4-7-2005","notaExpediente":"7.5","admitido":"","causaExclusion":""},\
    {"codigo":1, "nombre":"Marta   ","fechanac":"3-8-2003","notaExpediente":"15.52","admitido":"","causaExclusion":""},\
    {"codigo":2, "nombre":"Ana     ","fechanac":"1-7-1998","notaExpediente":"8.60","admitido":"","causaExclusion":""},\
    {"codigo":3, "nombre":"Maria   ","fechanac":"2000-9-3","notaExpediente":"7.92","admitido":"","causaExclusion":""},\
    {"codigo":4, "nombre":"Juan    ","fechanac":"6-2-2003","notaExpediente":"8.12","admitido":"","causaExclusion":""},\
    {"codigo":5, "nombre":"Jorge   ","fechanac":"9-1-2000","notaExpediente":"9.14","admitido":"","causaExclusion":""},\
    {"codigo":6, "nombre":"Antonio ","fechanac":"6-3-2004","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":7, "nombre":"Susana  ","fechanac":"9-7-2001","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":8, "nombre":"Fernando","fechanac":"2-2-2002","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":9, "nombre":"Alvaro  ","fechanac":"3-1-2001","notaExpediente":"7.58","admitido":"","causaExclusion":""},\
    {"codigo":10,"nombre":"Manuel  ","fechanac":"9-1-2003","notaExpediente":"9.16","admitido":"","causaExclusion":""},\
    {"codigo":11,"nombre":"Jaime   ","fechanac":"6-3-2005","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":12,"nombre":"Monica  ","fechanac":"9-7-2004","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":13,"nombre":"Lucia   ","fechanac":"2-2-2003","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":14,"nombre":"Federico","fechanac":"4-1-2004","notaExpediente":"7.58","admitido":"","causaExclusion":""}\
]}';


var instancias = JSON.parse(datos, function (k, v) {
    return v;
});
var expresionFecha = /^\d{1,2}-\d{1,2}-\d{4}$/;
var expresionNota = /^\d{1,2}.\d{2}$/;
instancias.solicitudes.forEach(x => {
    fecha = x.fechanac;
    nota = x.notaExpediente;
    if ((expresionFecha.test(fecha) == false) || (expresionNota.test(nota))) {
        x.admitido = false;
        x.causaExclusion = "Fallo de Formato";
    }

    anio = fecha.substr(-4);
    console.log(anio);
    if (anio < 2000 || anio > 2005) {
        x.admitido = false;
        x.causaExclusion = "Se encuentra fuera de la edad requerida";
    }
    if (nota < 0 || nota > 10) {
        x.admitido = false;
        x.causaExclusion = "NOTA FUERA DE RANGO";
    }

});

instaciasModificada=JSON.stringify(instancias,null, 3);
console.log(instaciasModificada);


   