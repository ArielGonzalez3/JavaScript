const nombre = "Ariel"
const apellido = "Gonzalez"

const datos = {
    nombre,
    apellido
}

//sessionStorage.setItem("datos", JSON.stringify(datos))
//localStorage.setItem("datos", JSON.stringify(datos))

const ahora = new Date()

//document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(ahora.getTime() +2 * 6000)}`
