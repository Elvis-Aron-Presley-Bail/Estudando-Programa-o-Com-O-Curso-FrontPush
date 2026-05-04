document.documentElement.addEventListener('mousemove', MouseMove)
const caixinha = document.querySelector(".caixinha")

function MouseMove(event){

    //const largura = event.clientX
    //const altura = event.clientY

    const {clientX, clientY} = event //maneira mais curta

    caixinha.style.marginTop = clientY - 19 + 'px'
    caixinha.style.left = clientX - 19 + 'px'
}


const nomes = ['Ana', 'Pedro', 'Luiz', 'João']

const [nome1, nome2, nome3, nome4] = nomes 


// [] desentrutura array, {} desestrutura objeto