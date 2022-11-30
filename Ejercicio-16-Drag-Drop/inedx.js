const parrafos = document.querySelectorAll(".paragraph")
const secciones = document.querySelectorAll(".section")
const papelera = document.querySelector(".papelera")

parrafos.forEach(paragraph => {
    paragraph.addEventListener("dragstart", event => {
        console.log("estoy arrastrando el parrafo: " + paragraph.innerHTML)
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    paragraph.addEventListener("dragend", () => {
        console.log("he terminado de arrastrar")
        paragraph.classList.remove("dragging")
    })
})

secciones.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" //copy por defecto
        // console.log("drag Over")
        //
    })

    section.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
    })
})


papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
