//Chamando as funções de acordo com a categoria
"use strict";
//Chamando as funções de acordo com a categoria
document.getElementById('ArrowRightAta')!.addEventListener('click', function () {
    avance(0);
});
document.getElementById('ArrowLeftAta')!.addEventListener('click', function () {
    return_(0);
});
document.getElementById('ArrowRightDef')!.addEventListener('click', function () {
    avance(1);
});
document.getElementById('ArrowLeftDef')!.addEventListener('click', function () {
    return_(1);
});
document.getElementById('ArrowRightMc')!.addEventListener('click', function () {
    avance(2);
});
document.getElementById('ArrowLeftMc')!.addEventListener('click', function () {
    return_(2);
});
document.getElementById('ArrowRightGk')!.addEventListener('click', function () {
    avance(3);
});
document.getElementById('ArrowLeftGk')!.addEventListener('click', function () {
    return_(3);
});
// --

//Função "Avançar" - carousel
function avance(ind: number) {
    document.getElementsByClassName('sliders')[ind].scrollLeft += 200
}
// --

//Função "Retornar" - carousel
function return_(ind: number) {
    document.getElementsByClassName('sliders')[ind].scrollLeft -= 200
}
// --