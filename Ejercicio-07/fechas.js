const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date(1987, 05, 17);
console.log(fechaNacimiento);

const fechaComp = fechaHoy > fechaNacimiento;
console.log(fechaComp);

const diaNaci = fechaNacimiento.getDate();
console.log(diaNaci);

const mesNaci = fechaNacimiento.getMonth() + 1;
console.log(mesNaci);

const anyoNaci = fechaNacimiento.getFullYear();
console.log(anyoNaci);
