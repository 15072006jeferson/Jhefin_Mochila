const form = document.getElementById("novoItem")
conts lista = document.getElementbyid("lista")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    conts quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value,elements.value)

    nome.value = ""
    quantidade.value = ""
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