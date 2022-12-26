// Quantidade de Jogadores por posição
let quantAta = document.getElementsByClassName('QuantAta')
let quantDef = document.getElementsByClassName('QuantDef')
let QuantMc = document.getElementsByClassName('QuantMc')
let QuantGole = document.getElementsByClassName('Quantgole')
// --

//Armazenamento dos controles do carousel
localStorage.setItem("controlAta", 0)
localStorage.setItem("controlDef", 0)
localStorage.setItem("controlMc", 0)
localStorage.setItem("QuantGole", 0)
// --

//Chamando as funções de acordo com a categoria
document.getElementById('avanAta').addEventListener('click', function () {
    Avan("controlAta", quantAta, 'groupSlides')
})

document.getElementById('retAta').addEventListener('click', function () {
    ret("controlAta", quantAta, 'groupSlides')
})

document.getElementById('avanDef').addEventListener('click', function () {
    Avan("controlDef", quantDef, 'groupSlidesTwo')
})

document.getElementById('retDef').addEventListener('click', function () {
    ret("controlDef", quantDef, 'groupSlidesTwo')
})

document.getElementById('avanMc').addEventListener('click', function () {
    Avan("controlMc", QuantMc, 'groupSlidesThree')
})

document.getElementById('retMc').addEventListener('click', function () {
    ret("controlMc", QuantMc, 'groupSlidesThree')
})

document.getElementById('avanGole').addEventListener('click', function () {
    Avan("QuantGole", QuantGole, 'groupSlidesFour')
})

document.getElementById('retGole').addEventListener('click', function () {
    ret("QuantGole", QuantGole, 'groupSlidesFour')
})
// --

//Função "Avançar" - carousel
function Avan(control, quant, local) {
    let contable = parseInt(localStorage.getItem(control)) + 1
    localStorage.setItem(control, contable)
    if (localStorage.getItem(control) > quant.length - 1) {
        localStorage.setItem(control, 0)
    }
    document.getElementById(local).style.transform = `translateX(${localStorage.getItem(control) * (-290)}px)`
}
// --

//Função "Retornar" - carousel
function ret(control, quant, local) {
    let contable = parseInt(localStorage.getItem(control)) - 1
    localStorage.setItem(control, contable)
    if (localStorage.getItem(control) < 0) {
        localStorage.setItem(control, quant.length - 1)
    }
    document.getElementById(local).style.transform = `translateX(${localStorage.getItem(control) * (-290)}px)`
}
// --