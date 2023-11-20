const form = document.getElementById("novoItem")
conts lista = document.getElementbyid("lista")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    criaElemento(elemento.target.elements['nome'].value,evento.target.elements['quantidade'].value)

     evento.target.elements['nome'].value = ""
     evento.target.elements['quantidade'].value = ""
})

function criaElemento (nome,quantidade) {
   const novoItem = document.createElement('Li')
   novoItem.classList.add("item")

const numeroItem = document.createElement('strong')
numeroItem.innerHTML = quantidade
novoItem.appendChild(numeroItem)

novoItem.innerHTML += nome

Lista.appendChild(novoItem)
}