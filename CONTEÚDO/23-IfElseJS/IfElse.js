let variavel1 = true //true
let variavel2 = false //false
let variavel3 = 'Elvis' //true
let variavel4 = '' //false
let variavel5 = 1 //true
let variavel6 = 0 //false
let variavel7 = null //false
let variavel8 = undefined //false
let variavel9 = NaN //false

if((variavel1 && variavel5) || (variavel6 && variavel7)) {
    console.log('Verdadeiro')
}else if(variavel2){
    console.log('Falso')
}else if(variavel3) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}