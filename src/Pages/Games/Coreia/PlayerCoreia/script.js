var idadeMi = document.getElementById('idadaMi');
var idadeMax = document.getElementById('idadeMax');
idadeMi.addEventListener('blur', function () {
    information(1, parseInt(idadeMi.value), parseInt(idadeMax.value));
});
idadeMax.addEventListener('blur', function () {
    information(1, parseInt(idadeMi.value), parseInt(idadeMax.value));
});
function information(Remov, idadeMin, idadeMa) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
        return reponse.json();
    })
        .then(function (data) {
        Jogadores(data);
    });
    function Jogadores(data) {
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
            generateBoxPlayer(Ata, document.getElementById('groupSlides'));
            generateBoxPlayer(Def, document.getElementById('groupSlidesTwo'));
            generateBoxPlayer(mc, document.getElementById('groupSlidesThree'));
            generateBoxPlayer(gole, document.getElementById('groupSlidesFour'));
        }
        else if (idadeMin > idadeMa || idadeMin == idadeMa || isNaN(idadeMin) || isNaN(idadeMa)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão');
            geral(0, 0, 100);
            idadeMi.value = "0";
            idadeMax.value = "100";
        }
    }
}
information(0, 0, 100);
function generateBoxPlayer(pos, section) {
    for (var index = 0; index < pos.length; index++) {
        var Name = document.createElement('p');
        var idade = document.createElement('p');
        var Box = document.createElement('div');
        var img = document.createElement('img');
        Box.classList.add('BoxPlayers');
        img.setAttribute('src', pos[index].url_img);
        Name.innerText = pos[index].nome;
        idade.innerText = pos[index].idade + " Anos";
        Box.appendChild(img);
        Box.appendChild(Name);
        Box.appendChild(idade);
        section.appendChild(Box);
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
