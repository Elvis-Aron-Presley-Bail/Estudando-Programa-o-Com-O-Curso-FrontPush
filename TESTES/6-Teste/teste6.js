const botao = document.querySelector("#botao")
const hamOn = document.querySelector(".hamburguerOn")
const sair = document.querySelector(".sair")

botao.addEventListener('click', () => {
    hamOn.classList.add('hamLigado')
})

sair.addEventListener('click', () => {
    hamOn.classList.remove('hamLigado')
})