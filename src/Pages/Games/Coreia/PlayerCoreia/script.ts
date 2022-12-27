let idadeMi = document.getElementById('idadaMi')
let idadeMax = document.getElementById('idadeMax')

idadeMi.addEventListener('blur', function () {
    geral(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

idadeMax.addEventListener('blur', function () {
    geral(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

function geral(Remov, idadeMin, idadeMa) {
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
            interface infoPLaters {
                nome: string,
                idade: number,
                url_img: string,
                Selecao: string,
                posicao: string,
            }
            let jogadores = data.filter((item: infoPLaters) => item.Selecao == "Coreia")


            jogadores = jogadores.filter((item: infoPLaters) => item.idade >= ageMin && item.idade <= ageMax)


            let ata = jogadores.filter((item: infoPLaters) => item.posicao == "atacante")
            let def = jogadores.filter((item: infoPLaters) => item.posicao == "defensor")
            let mc = jogadores.filter((item: infoPLaters) => item.posicao == "meio-campista")
            let gol = jogadores.filter((item: infoPLaters) => item.posicao == "goleiro")



            generateBoxPlayer(ata, document.getElementById('groupSlides'))
            generateBoxPlayer(def, document.getElementById('groupSlidesTwo'))
            generateBoxPlayer(mc, document.getElementById('groupSlidesThree'))
            generateBoxPlayer(gol, document.getElementById('groupSlidesFour'))

        }
    }

        else if (idadeMin > idadeMa) {
        alert('Idade Mínima está acima da Idade Máxima - Idade máxima por padrão é 100')
        geral(0, 0, 100)
        idadeMi.value = 0
        idadeMax.value = 100
    }

}

geral(0, 0, 100)


function generateBoxPlayer(pos, section) {
    for (let index = 0; index < pos.length; index++) {
        const Name = document.createElement('p')
        const idade = document.createElement('p')
        const Box = document.createElement('div')
        const img = document.createElement('img')

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
// --

function removed() {
    let TotalPlayers = document.getElementsByClassName('BoxPlayers')
    for (let index = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove()
        index--
    }
}
