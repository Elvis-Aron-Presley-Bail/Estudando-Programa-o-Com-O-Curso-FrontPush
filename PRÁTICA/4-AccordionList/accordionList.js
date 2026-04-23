document.querySelectorAll('.accordion-content').forEach((elemento) => {
    elemento.style.maxHeight = '0px'
})

document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener('click', () => {

        const accordionContent = button.nextElementSibling

        button.classList.toggle('ativado')
        button.classList.toggle('cor')

        if(button.classList.contains('ativado')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = 0
        }
        
    })
})