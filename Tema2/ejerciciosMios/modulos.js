function modulo(nombre, curso, aprobado = false) {
    this.nombre = nombre;
    this.curso = curso;
    this.aprobado = aprobado;
    this.convocatorias = 0;
    this.anio = 0;

    this.hacerExamen = function () {
        if (this.aprobado == false) {
            this.convocatorias++;
            this.anio = Math.ceil(this.convocatorias / 2);
            nota = Math.floor(Math.random() * 11);
            if (nota >= 5) {
                this.aprobado = true;
            }
        }
    }
}

var ciclo = [];
ciclo.push(new modulo("mod1", 1, false));
ciclo.push(new modulo("mod2", 1, false));
ciclo.push(new modulo("mod3", 1, false));
ciclo.push(new modulo("mod4", 2, false));
ciclo.push(new modulo("mod5", 2, false));
ciclo.push(new modulo("mod6", 2, false));


while (ciclo.some(y => y.aprobado != true)) {
    ciclo.forEach(x => { x.hacerExamen(); });
}

ciclo.forEach(x => {
    console.log(x['nombre'] + ": " + x['aprobado'] + " con: " + x['convocatorias'] + " años: " + x['anio']);
});

