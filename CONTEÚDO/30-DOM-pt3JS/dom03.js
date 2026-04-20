let box = document.querySelector(".box")

/*
box.addEventListener('click', () => {
    console.log('Clicou')
})
*/


/*
function callback(event){
    console.log(event.target)
}
*/

function callback(event) {
    if(event.key == 'r') {
        box.classList.toggle('red')
    }
    else if(event.key == 'b') {
        box.classList.toggle('blue')
    }
    else if(event.key == 'g') {
        box.classList.toggle('green')
    }
    else {
        box.classList.toggle('purple')
    }
}

window.addEventListener('keydown', callback)



//currentTarget = retorna apenas o box
//target = retorna o box, mas tambem seus elementos filhos se clicados