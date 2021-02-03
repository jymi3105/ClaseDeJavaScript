function modulo(nombre, horas, curso, aprobado, nota) {
    //Estas son las caracteristicas que va a tener cada una de nuestras asignaturas
    this.nombre = nombre;
    this.horas = horas;
    this.curso = curso;
    this.aprobado = aprobado;
    this.nota = nota;
    this.convocatorias = 0;
    this.anio = 1;
    //La unica funcion que tiene es la de hacer el examen
    this.hacerExamen = function () {
        //Solo va a entrar en la fumcion en el caso de que no este aprobado
        if (this.aprobado == false) {
            //Cada vez que entra sube en una unidad el numero de convocatorias realizadas
            this.convocatorias++;
            //Son los años que te ha llevado aprobar esa asignatura que va relacionada directamente con las convocatorias
            if (this.convocatorias > 2) {
                this.anio = Math.ceil((this.convocatorias / 2));
            }
            //La nota se pone de forma aleatoria entre 0 y 10.
            nota = Math.floor(Math.random() * 11);
            //Y se lo asigno a la propiedad del objeto modulo
            this.nota = nota;
            //En el caso de que saque5 o mas, aprueba la asinatura
            if (nota >= 5) {
                this.aprobado = true;
            }
        }
    }
}
//Creo 3 arrays de objetos, uno es el del primer curso, otro del segundo curso, y estos
//dos array lo meto en el array de todo el ciclo
var ciclo1 = [];
var ciclo2 = [];
var ciclo = [];
//Meto las asignaturas en el array del curso que le corresponde
ciclo1.push(new modulo("mod1", 6, 1, false, 0));
ciclo1.push(new modulo("mod2", 8, 1, false, 0));
ciclo1.push(new modulo("mod3", 6, 1, false, 0));
ciclo1.push(new modulo("mod4", 3, 1, false, 0));
ciclo1.push(new modulo("mod5", 4, 1, false, 0));
ciclo1.push(new modulo("mod6", 3, 1, false, 0));
ciclo2.push(new modulo("mod7", 5, 2, false, 0));
ciclo2.push(new modulo("mod8", 8, 2, false, 0));
ciclo2.push(new modulo("mod9", 6, 2, false, 0));
ciclo2.push(new modulo("mod10", 3, 2, false, 0));
ciclo2.push(new modulo("mod11", 5, 2, false, 0));
ciclo2.push(new modulo("mod12", 8, 2, false, 0));
//Y los dos cursos, los meto dentro del array del ciclo completo
ciclo.push(ciclo1);
ciclo.push(ciclo2);

//doble for anidado para recorrer todos los arrays
for (let x = 0; x < ciclo.length; x++) {
    //La condicion del while, es que mientras haya solo uno que no este aprobado, haremos lo que hay dentro del ciclo
    while (ciclo[x].some(y => y.aprobado != true)) {
        //primero recorro el array interno para realizar el examen
        ciclo[x].forEach(y => {
            y.hacerExamen();
        });
        //declaro una variable local para controlar el numero de horas suspensas que tiene
        let horasSuspensas = 0;
        //Recorro de nuevo el array interno para controlar que asignaturas están suspensas con dos convocatorias ya hechas
        //Y recorro el array del primer curso, que es el que me interesa para luego pasar las 
        //asignaturas al array del segundo curso
        ciclo[x].forEach(horaSusp => {
            if (horaSusp.aprobado != true && (horaSusp.convocatorias == 2 || horaSusp.convocatorias == 2) && x == 0) {
                horasSuspensas += horaSusp['horas'];
            }
        });

        //En el caso de que el numero de horas suspensas sea menor de 11 horas y sea el array del primer curso
        //Entraremos en el if para hacer lo siguiente.
        if (horasSuspensas < 11 && x == 0 && horasSuspensas > 0) {
            //Hago un array con las asignaturas suspensas.
            suspensas = ciclo[x].filter(sus => sus.aprobado == false);
            //Esta intruccion solo es para controlar que funciona como espero. Es comentable
            console.log("Las horas suspensas son: " + horasSuspensas);
            //Recorro el array creado para meter todas las asignaturas dentro del curso 2
            suspensas.forEach(s => { ciclo2.push(s) });
            //Y las quito del curso 1, y asi no entra en el while de arriba, 
            //ya que me saldrá todo como aprobado
            for (let w = 0; w < ciclo1.length; w++) {
                //quito las suspensas
                if (ciclo1[w].aprobado == false) {
                    //la w es el lugar de donde va a quitar, y solo quita 1.
                    ciclo1.splice(w, 1);
                    //Como a acortado el array, tengo que reducir una para que no me salte ningun valor
                    w--;
                };
            }
        }
    }
}
//Lo saco por pantalla solo para controlar que sale como espero. Se puede comentar
console.log("ciclo1");
console.log(ciclo1);
console.log("ciclo2");
console.log(ciclo2);

ciclo.forEach(l => {
    l.forEach(t => {
        console.log(t['nombre'] + ": " + t['aprobado'] + " nota: " + t['nota'] + " en la convocatoria: " + t['convocatorias'] + " años: " + t['anio']);
    });
});

