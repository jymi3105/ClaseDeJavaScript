class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo
    }

    mostrarInfo() {
        return `
        <b>Nombre:</b> ${this.nombre} <br/>
        <b>Edad:</b> ${this.edad} <br/>
        <b>Correo:</b> ${this.correo} <br/>
        <hr/>
        `;
    }
}

class Estudiante extends Usuario {
    constructor(nombre, edad, correo, carrera) {
        super(nombre, edad, correo),
            this.carrera = carrera;
    }
//Aqui sobreescribo el metodo, igual que en java
    mostrarInfo() {
        return `
        <b>Nombre:</b> ${this.nombre} <br/>
        <b>Edad:</b> ${this.edad} <br/>
        <b>Correo:</b> ${this.correo} <br/>
        <b>Carrera:</b> ${this.carrera} <br/>
        <hr/>
        `;
    }
}
