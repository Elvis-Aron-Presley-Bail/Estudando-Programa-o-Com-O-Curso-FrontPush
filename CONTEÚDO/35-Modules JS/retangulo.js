export function areaRetangulo(a, b){
    return a * b
}

export function perimetroRetangulo(a, b){
    return (a*2) + (b*2)
}

const retangulo = {
    areaRetangulo,
    perimetroRetangulo
}

export default retangulo //defalt não precisa chamar o retangulo pelo nome