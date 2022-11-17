const listCompra = ["arroz", "Pastas", "Aceite de Oliva", "cafe", "Pan"];

listCompra.push("Aceite de Girasol");
console.log(listCompra);

listCompra.pop();
console.log(listCompra);

const favPelis = [
    {titulo: "Harry Potter and the Deathly Hallows - Part 2",
    director: "David Yates",
    fecha: new Date(2011, 7, 15)},
    {titulo: "The Lord of the Rings\: The Two Towers",
    director: "Peter Jackson",
    fecha: new Date(2002, 11, 18)},
    {titulo: "Star Wars: Episode V \-The Empire Strikes Back",
    director: "Irvin Kershner",
    fecha: new Date(1980, 10, 3)}
];

const post2010 = favPelis.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));
console.log(post2010);

const directores = favPelis.map(pelicula => {
    return pelicula.director;
});
console.log(directores);

const listPelis = favPelis.map(pelicula => {
    return pelicula.titulo;
});
console.log(listPelis);

const dire_titul = directores.concat(listPelis);
console.log(dire_titul);

const dire_yiyul_prop = [...directores, ...listPelis];
console.log(dire_yiyul_prop);
