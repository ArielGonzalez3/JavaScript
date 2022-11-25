class Estudiante {
    nombre = "Ariel";
    asignaturas = ["JavaScript", "HTML", "CSS"];
    
    obtenerDatos() {
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas
        }
    }
};

const estudiante = new Estudiante();
console.log(estudiante.obtenerDatos());
