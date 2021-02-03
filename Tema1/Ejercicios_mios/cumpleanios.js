var anio = 2020;
for (let i = 0; i < 5; i++, anio++) {
    var cumple = new Date('May 31,' + anio);
    var day1 = cumple.getDay();

    switch (day1) {
        case 0:
            console.log("El año " + anio +  " cumplo los años en Domingo.");
            break;
        case 1:
            console.log("El año " + anio +  " cumplo los años en Lunes.");
            break;
        case 2:
            console.log("El año " + anio +  " cumplo los años en Martes.");
            break;
        case 3:
            console.log("El año " + anio + " cumplo los años en Miercoles.");
            break;
        case 4:
            console.log("El año " + anio + " cumplo los años en jueves.");
            break;
        case 5:
            console.log("El año " + anio + " cumplo los años en viernes.");
            break;
        case 6:
            console.log("El año " + anio + " cumplo los años en Sabado.");
            break;
    }

}
