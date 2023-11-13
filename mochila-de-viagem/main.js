const fora = document.getElementById("novoItem")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    criaElemento(elemento.target.elements['nome'].value,evento.target.elements['quantidade'].value)
})

function criaElemento (nome,quantidade) {
    console.log(nome)
    console.log(quantidade)


   const novoItem = document.createElement('Li')
   novoItem.classList.add("item")

const numeroItem = document.createElement('strong')
numeroItem.innerHTML = quantidade

novoItem.appendChild(numeroItem)
novoItem.innerHTML += nome

console.log(novoItem)
}