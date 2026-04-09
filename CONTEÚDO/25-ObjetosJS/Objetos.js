const retangulo = {
    ladoA: 4,
    ladoB: 8,
    area: function() {
        return this.ladoA * this.ladoB
    },
    perimetro: function(ladoA, ladoB) {
        return (2 * ladoA + 2 * ladoB)
    }
}

console.log(retangulo.area())
console.log(retangulo.perimetro(4, 8))

retangulo.ladoA = 2 //alterei o valor do ladoA
retangulo.ladoB = 4 //alterei o valor do ladoB
retangulo.borda = 1 //adicionei um novo componente ao retangulo

console.log(retangulo.area())
