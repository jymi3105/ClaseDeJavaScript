var persona  = new Object();
persona={
    altura:1.65,
    sexo:"hombre"
}
Object.keys(persona).forEach(x => console.log("--> " + persona[x]) );


var persona2={
    nombre:"luis",
    edad:20,
    direccion: {
        calle: "Miravel",
        numero: 20
    }
}

Object.keys(persona2).forEach(x=> console.log("--> " + persona2[x]));
Object.keys(persona2.direccion).forEach(x=> console.log("-->" + persona2.direccion[x]));