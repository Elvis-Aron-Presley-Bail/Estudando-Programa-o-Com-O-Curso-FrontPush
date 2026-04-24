//JSON.parse() //Transforma o texto JSON em um Objeto
///JSON.stringify() //Transforma um Objeto em JSON

const json = JSON.parse('{"id": 1,"nome": "Notebook Dell","modelo": "Gamer","quantidade": 5}')

console.log(json)

const caneta = {
    cor: "azul",
    formato: "triangulo",
    tipo: "desenho"
}

const stringJson = JSON.stringify(caneta)

console.log(stringJson)