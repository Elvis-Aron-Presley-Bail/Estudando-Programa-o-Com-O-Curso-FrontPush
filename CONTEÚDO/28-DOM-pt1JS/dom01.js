/*

let h1 = document.querySelector("h1")

console.log(h1) //Exibe <h1>DOM em JS</h1>
console.log(h1.innerText) //Exibe DOM em JS
console.log(h1.classList[1]) //Exibe as classes desse elemento
console.log(h1.id) //Exibe o id

*/


/*

const titulo = document.getElementById('titulo') //Seleciona o elemento que tem esse id

const subtitle = document.getElementsByClassName('subtitle blue') //Seleciona os elementos com essa classe

const ul = document.getElementsByTagName('ul') //Seleciona os elementos com essa tag

const menu = document.querySelector('.menu .menu-item') //Seleciona o PRIMEIRO elemento com essa classe

const items = document.querySelectorAll('.menu .menu-item') //Seleciona o TODOS os elementos com essa classe

*/


const menu = document.querySelector('.menu')

console.log(menu.className) //Retorna o nome da classe
console.log(menu.classList) //Retorna um 'Array' com as classes

menu.classList.add('adicionei1', 'adicionei2') //Adiciona classes a um elemento
menu.classList.remove('adicionei2') //Remove classes de um elemento
menu.classList.toggle('active') //Adiciona a classe se não tiver, remove se tiver
menu.classList.contains('active') //Verifica se a tag possue ou não essa classe. Retorna True ou False
menu.classList.replace('lista', 'substitui') //Substitui a classe 'lista' pela classe 'substitui'

//ATRIBUTO: img src='imagem.png'  =  img é um atributo

const img = document.querySelector("img")

img.getAttribute('alt') // Retorna o que tem dentro de alt
img.setAttribute('alt', 'mensagem substituida') //Adiciona ou substitui o que ta dentro de alt
img.removeAttribute('alt') //Remove o atributo alt