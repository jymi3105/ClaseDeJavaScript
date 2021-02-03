const miliSegDia = 86400000;
const fecha = new Date(Date.now());

function Persona(titular, saldo, sueldo, deuda) {
    this.titular = titular;
    this.saldo = saldo;
    this.sueldo = sueldo;
    this.deuda = deuda;
    this.miliSecFecha = fecha.getTime();
    this.fechaFinDeuda = new Date();
    this.gastosPorMes = [];
    this.amortizacionPorMes = [];

    this.gastosCorrientes = function () {
        let gastoMensual;
        gastomensual = Math.floor((Math.random() * 201)) + 700;
        this.saldo -= gastomensual;
        this.gastosPorMes.push(gastoMensual);
    }

    this.cobrar = function () {
        this.saldo += this.sueldo;
    }

    this.gastoAmortizado = function () {
        if (this.deuda > 0) {
            amortizadoPorMes = Math.floor((Math.random() * 301)) + 100;
            if (amortizadoPorMes > this.deuda) {
                amortizadoPorMes = this.deuda;
            }
            this.meses++;
            this.deuda -= amortizadoPorMes;
            this.saldo -= amortizadoPorMes;
            this.amortizacionPorMes.push(amortizadoPorMes);
        }
    }
}

var gente = [];
gente.push(new Persona("Alfonso Lopez", 11000, 2000, 600));
gente.push(new Persona("Tomas Garido", 9000, 1500, 500));
gente.push(new Persona("Esteban co", 30, 120, 1200));
gente.push(new Persona("Guillermo Velasco", 61500, 3000, 1500));
gente.push(new Persona("Luis del Olmo", 168410, 2300, 1100));

while (gente.some(t => t.deuda > 0)) {
    
    gente.forEach(z => {
        if (z.deuda != 0) {
            z.miliSecFecha += miliSegDia;
        }
        z.fechaFinDeuda.setTime(z.miliSecFecha);
        if (z.fechaFinDeuda.getDate() == 27) {
            z.gastosCorrientes();
            z.gastoAmortizado();
            z.cobrar();
        }

    });
}

gente.forEach(t => console.table("Titular: " + t.titular + " --> " + " Con un saldo de: " + t.saldo + " pago su deuda en: " + t.fechaFinDeuda.toLocaleDateString() + " meses. Sus amortizaciones fueron--> " + t.amortizacionPorMes));
