const botao = document.querySelector(".botao")
const modal = document.querySelector("#mymodal")
const close = document.querySelector(".close")

botao.addEventListener('click', () => {
    modal.classList.add('modal-activate')
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-activate')
})