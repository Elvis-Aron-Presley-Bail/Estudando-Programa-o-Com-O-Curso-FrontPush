/*

let carros = ['Fiat', 'Audi', 'Ferrari', 'VW']
let modelos = ['Argo', 'A3', 'La Ferrari', 'Polo']


//primeira forma
carros.forEach(function(elemento, indice, arrayCompleto) {
    console.log(elemento)
})


//segunda forma
carros.forEach((elemento, indice, arrayCompleto) => {
    console.log(indice)
})


//terceira forma
carros.forEach((elemento, indice, arrayCompleto) => console.log(elemento))


//Map
const modelosCarros = carros.map((elemento, indice) => {
    return elemento + ' ' + modelos[indice]
})

console.log(modelosCarros) */


let li = document.querySelectorAll('li')

li.forEach((item, posicao) => {
    item.classList.add(`Item-${posicao+1}`)
})


const numeros = [2, 4, 6, 8, 10]

const numerosX2 = numeros.map(n => n * 2)

console.log(numerosX2)


const produtos = [
    {
        item: 'Mouse',
        preco: 30
    },
    {
        item: 'Teclado',
        preco: 50
    },
    {
        item: 'Memória Ram',
        preco: 4030
    }
]

let valorTotal = 0

produtos.map(elemento => valorTotal += elemento.preco)

console.log(valorTotal)