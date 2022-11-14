let nombre = "Elvis Ariel";
let apellido = "González";

//Concatenacion
let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

//Cambia a Mayusculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Cambia a Minusculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Cant de letars de variable estudiante
let longitud_estudiante = estudiante.length;
console.log(longitud_estudiante);

//Primera letra de nombre
let nombre_letra1 = nombre.charAt();
console.log(nombre_letra1);

//Ultima letra de apellido
let apellido_letra_fin = apellido.charAt(7);
console.log(apellido_letra_fin);

//Elimina espacios en variable estudiante
let estudiante_sin_espacios = estudiante.replace(/ /g, "");
console.log(estudiante_sin_espacios);

//La variable estudiante contiene el nombre
let contiene_nombre = estudiante.includes(nombre);
console.log(contiene_nombre);
