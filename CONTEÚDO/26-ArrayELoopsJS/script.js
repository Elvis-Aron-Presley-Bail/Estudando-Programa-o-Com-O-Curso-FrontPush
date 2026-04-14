let frutas = ['maça', 'uva', 'goiaba' , 'banana', 'pera', ['nanica', 'prata']]

console.log(frutas[3][1]) // vai exibir 'prata'

console.log(frutas.pop()) // remove o último elemento do array e retorna ele
console.log(frutas.push('mimosa')) // adiciona um elemento no fim do array
console.log(frutas.length) // retorna o tamanho do array

// LAÇOS DE REPETIÇÃO

for(let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0

while(i < frutas.length) {
    console.log(`${i}: ${frutas[i]}`)
    i++
}