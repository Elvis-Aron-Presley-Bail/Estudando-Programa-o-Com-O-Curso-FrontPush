function multiplicar1(a, b) {
    return a * b
}

const multiplicar2 = function(a, b) {
    return a * b
}

const multiplicar3 = (a, b) => {
    return a * b
}

const multiplicar4 = (a, b) => a * b

console.log(multiplicar1(4, 5))
console.log(multiplicar2(9, 3))
console.log(multiplicar3(3, 8))
console.log(multiplicar4(2, 6))


function maiuscula1(nome) {
    return nome.toUpperCase()
}

console.log(maiuscula1('Elvis'))


const maiuscula2 = nome => nome.toUpperCase()

console.log(maiuscula2('Elvis'))