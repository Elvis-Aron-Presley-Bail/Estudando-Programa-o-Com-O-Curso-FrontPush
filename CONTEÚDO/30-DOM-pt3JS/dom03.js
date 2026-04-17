let box = document.querySelector(".box")

/*
box.addEventListener('click', () => {
    console.log('Clicou')
})
*/

function callback(event){
    console.log(event.target)
}

box.addEventListener('click', callback)

box.style.backgroundColor = 'gray'

//currentTarget = retorna apenas o box
//target = retorna o box, mas tambem seus elementos filhos se clicados