const datosPerso = {
    nombre: "Elvis Ariel",
    apellido: "González",
    edad: 35,
    altura: 174,
    isDeveloper: true
};

const edadAri = datosPerso.edad;
console.log(edadAri);

const listDatosPerso = [
    {...datosPerso},
    {
    nombre: "Sofía Candela",
    apellido: "Dominguez Lopez",
    edad: 28,
    altura: 155,
    isDeveloper: false
    },
    {
    nombre: "Alma",
    apellido: "González Dominguez",
    edad: 4,
    altura: 100,
    isDeveloper: true
    }
];
console.log(listDatosPerso);

listDatosPerso.sort((a, b) => b.edad - a.edad);
console.log(listDatosPerso);
