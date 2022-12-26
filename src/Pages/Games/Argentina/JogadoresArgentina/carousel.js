//Chamando as funções de acordo com a categoria
document.getElementById('avanAta').addEventListener('click', function () {
    Avan(0)
})

document.getElementById('retAta').addEventListener('click', function () {
    ret(0)
})

document.getElementById('avanDef').addEventListener('click', function () {
    Avan(1)
})

document.getElementById('retDef').addEventListener('click', function () {
    ret(1)
})

document.getElementById('avanMc').addEventListener('click', function () {
    Avan(2)
})

document.getElementById('retMc').addEventListener('click', function () {
    ret(2)
})

document.getElementById('avanGole').addEventListener('click', function () {
    Avan(3)
})

document.getElementById('retGole').addEventListener('click', function () {
    ret(3)
})
// --

//Função "Avançar" - carousel
function Avan(ind) {
    document.getElementsByClassName('sliders')[ind].scrollLeft += 200
}
// --

//Função "Retornar" - carousel
function ret(ind) {
    document.getElementsByClassName('sliders')[ind].scrollLeft -= 200
}
// --