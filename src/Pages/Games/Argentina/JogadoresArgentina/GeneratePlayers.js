"use strict";
let ageMinimum = document.getElementById('ageMin');
let ageMaximum = document.getElementById('ageMax');
ageMinimum.addEventListener('blur', function () {
    generatePlayers(1, parseInt(ageMinimum.value), parseInt(ageMaximum.value));
    console.log(parseInt(ageMinimum.value));
});
ageMaximum.addEventListener('blur', function () {
    generatePlayers(1, parseInt(ageMinimum.value), parseInt(ageMaximum.value));
    console.log(parseInt(ageMaximum.value));
});
function generatePlayers(remove, ageMin, ageMax) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
        return reponse.json();
    })
        .then(function (data) {
        generatingPlayers(data);
    });
    function generatingPlayers(objPlayers) {
        if (remove != 0) {
            removingPlayers();
        }
        if (ageMin < ageMax && ageMin != ageMax) {
            let Players = objPlayers.filter((item) => item.Selecao == "Argentina");
            Players = Players.filter((item) => item.idade >= ageMin && item.idade <= ageMax);
            let att = Players.filter((item) => item.posicao == "atacante");
            let def = Players.filter((item) => item.posicao == "defensor");
            let mc = Players.filter((item) => item.posicao == "meio-campista");
            let gk = Players.filter((item) => item.posicao == "goleiro");
            createBoxPlayers(att, document.getElementById('groupSlides'));
            createBoxPlayers(def, document.getElementById('groupSlidesTwo'));
            createBoxPlayers(mc, document.getElementById('groupSlidesThree'));
            createBoxPlayers(gk, document.getElementById('groupSlidesFour'));
        }
        else if (ageMin > ageMax || ageMin == ageMax || isNaN(ageMin) || isNaN(ageMax)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão');
            generatePlayers(0, 0, 100);
            ageMinimum.value = "0";
            ageMaximum.value = "100";
        }
    }
}
generatePlayers(0, 0, 100);
function createBoxPlayers(positionPlayer, section) {
    for (let index = 0; index < positionPlayer.length; index++) {
        let Name = document.createElement('p');
        let age = document.createElement('p');
        let Box = document.createElement('div');
        let img = document.createElement('img');
        Box.classList.add('BoxPlayers');
        img.setAttribute('src', positionPlayer[index].url_img);
        Name.innerText = positionPlayer[index].nome;
        age.innerText = positionPlayer[index].idade + " Anos";
        Box.appendChild(img);
        Box.appendChild(Name);
        Box.appendChild(age);
        section.appendChild(Box);
    }
}
function removingPlayers() {
    let TotalPlayers = document.getElementsByClassName('BoxPlayers');
    for (let index = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove();
        index--;
    }
}
