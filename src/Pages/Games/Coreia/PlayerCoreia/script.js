var ageMin = document.getElementById('ageMin');
var ageMax = document.getElementById('ageMax');
ageMin.addEventListener('blur', function () {
    handleInformationPlayers(1, parseInt(ageMin.value), parseInt(ageMax.value));
});
ageMax.addEventListener('blur', function () {
    handleInformationPlayers(1, parseInt(ageMin.value), parseInt(ageMax.value));
});
function handleInformationPlayers(Remov, idadeMin, idadeMa) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
        return reponse.json();
    })
        .then(function (data) {
        handlePlayers(data);
    });
    function handlePlayers(data) {
        if (Remov != 0) {
            removed();
        }
        if (idadeMin < idadeMa && idadeMin != idadeMa) {
            var jogadores = data.filter(function (item) { return item.Selecao == "Coreia"; });
            jogadores = jogadores.filter(function (item) { return item.idade >= idadeMin && item.idade <= idadeMa; });
            var Ata = jogadores.filter(function (item) { return item.posicao == "atacante"; });
            var Def = jogadores.filter(function (item) { return item.posicao == "defensor"; });
            var mc = jogadores.filter(function (item) { return item.posicao == "meio-campista"; });
            var gole = jogadores.filter(function (item) { return item.posicao == "goleiro"; });
            generateBoxPlayer(Ata, document.getElementById('playersAta'));
            generateBoxPlayer(Def, document.getElementById('playersDef'));
            generateBoxPlayer(mc, document.getElementById('playersMc'));
            generateBoxPlayer(gole, document.getElementById('playersAtaGole'));
        }
        else if (idadeMin > idadeMa || idadeMin == idadeMa || isNaN(idadeMin) || isNaN(idadeMa)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão');
            handleInformationPlayers(0, 0, 100);
            ageMin.value = "0";
            ageMax.value = "100";
        }
    }
}
handleInformationPlayers(0, 0, 100);
function generateBoxPlayer(pos, section) {
    for (var index = 0; index < pos.length; index++) {
        var name_1 = document.createElement('p');
        var age = document.createElement('p');
        var box = document.createElement('div');
        var img = document.createElement('img');
        box.classList.add('BoxPlayers');
        img.setAttribute('src', pos[index].url_img);
        name_1.innerText = pos[index].nome;
        age.innerText = pos[index].idade + " Anos";
        box.appendChild(img);
        box.appendChild(name_1);
        box.appendChild(age);
        section.appendChild(box);
    }
}
// --
function removed() {
    var TotalPlayers = document.getElementsByClassName('BoxPlayers');
    for (var index = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove();
        index--;
    }
}
