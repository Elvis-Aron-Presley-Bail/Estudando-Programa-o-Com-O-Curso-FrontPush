let link = document.createElement('a')
link.setAttribute('href', 'https://youtube.com')

let textoLink = document.createTextNode('Link para o YouTube')

link.appendChild(textoLink)

let container = document.querySelector("#app")

container.appendChild(link)

let box = document.querySelector(".box")

box.style.width = '200px'
box.style.height = '1200px'
box.style.backgroundColor = 'black'

console.log(box.clientHeight) //Retorna a altura da caixa
console.log(box.clientWidth) //Retorna a largura da caixa

console.log(box.offsetTop) //Retorna o espaço entre o topo de elemento e o topo da página
console.log(box.offsetLeft) //Retorna o espaço entre lado do elemento e o lado da página

console.log(window.innerWidth) //Retorna a largura da janela
console.log(window.outerWidth) //Retorna a largura da janela + o inspecionar

console.log(window.pageYOffset) //Retorna quando voce rolor a página


const janela = window.matchMedia('(max-width: 600px)') //Cria um media-query

if(janela.matches) { //Verifica os pixels do width
    console.log('mobile')
} else {
    console.log('computador')
}