const fora = document.getElementById("novoItem")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    console.log("evento")
    console.log(evento.target['nome'].value)   
    console.log(evento.target['quantidade'].value) 
})