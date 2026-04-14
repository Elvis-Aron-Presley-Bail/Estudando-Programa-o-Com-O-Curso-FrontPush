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

console.log(modelosCarros)