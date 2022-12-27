let idadeMi = document.getElementById('idadaMi')
let idadeMax = document.getElementById('idadeMax')

idadeMi.addEventListener('blur', function () {

    generalInformation(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

idadeMax.addEventListener('blur', function () {

    generalInformation(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

function
    generalInformation(Remov, idadeMin, idadeMa) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            handlePlayerInformation(data)
        })

    function handlePlayerInformation(data) {
        if (Remov != 0) {
            removed()
        }

        if (idadeMin < idadeMa) {

            let jogadores = data.filter(item => item.Selecao == "Coreia")


            jogadores = jogadores.filter(item => item.idade >= idadeMin && item.idade <= idadeMa)


            let Ata = jogadores.filter(item => item.posicao == "atacante")
            let Def = jogadores.filter(item => item.posicao == "defensor")
            let mc = jogadores.filter(item => item.posicao == "meio-campista")
            let gole = jogadores.filter(item => item.posicao == "goleiro")

            generateBoxPlayer(Ata, document.getElementById('groupSlides'))
            generateBoxPlayer(Def, document.getElementById('groupSlidesTwo'))
            generateBoxPlayer(mc, document.getElementById('groupSlidesThree'))
            generateBoxPlayer(gole, document.getElementById('groupSlidesFour'))

        }

        else if (idadeMin > idadeMa) {
            alert('Idade Mínima está acima da Idade Máxima - Idade máxima por padrão é 100')

            generalInformation(0, 0, 100)
            idadeMi.value = 0
            idadeMax.value = 100
        }

    }
}

generalInformation(0, 0, 100)

function generateBoxPlayer(pos, section) {
    for (let index = 0; index < pos.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        img.setAttribute('src', pos[index].url_img);

        Name.innerText = pos[index].nome
        idade.innerText = pos[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(idade)
        section.appendChild(Box)
    }
}


function removed() {
    TotalPlayers = document.getElementsByClassName('BoxPlayers')
    for (let index = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove()
        index--
    }
}
