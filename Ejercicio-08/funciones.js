function verdad() {
    return true;
};
console.log(verdad());

async function saludoPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
};

function* idsPar() {
    let id = 0;
    while(true) {
        yield id += 2
    }
};
const genId = idsPar();

console.log(genId.next().value);
