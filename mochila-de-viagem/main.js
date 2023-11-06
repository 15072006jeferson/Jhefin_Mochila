const fora = document.getElementById("novoItem")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    console.log("funcionou")
    console.log(evento.target[0].value)    
})