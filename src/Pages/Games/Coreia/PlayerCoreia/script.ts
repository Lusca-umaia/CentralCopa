const idadeMi = document.getElementById('idadaMi') as HTMLInputElement;
const idadeMax = document.getElementById('idadeMax') as HTMLInputElement;

idadeMi.addEventListener('blur', function () {
    information(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

idadeMax.addEventListener('blur', function () {
    information(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

interface Players {
    nome: string,
    idade: number,
    url_img: string,
    Selecao: string,
    posicao: string,
}


function information(Remov: number, idadeMin: number, idadeMa: number) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            Jogadores(data)
        })

    function Jogadores(data: Players) {
        if (Remov != 0) {
            removed()
        }

        if (idadeMin < idadeMa && idadeMin != idadeMa) {

            let jogadores = data.filter((item: Players) => item.Selecao == "Coreia")



            jogadores = jogadores.filter((item: Players) => item.idade >= idadeMin && item.idade <= idadeMa)


            const Ata = jogadores.filter((item: Players) => item.posicao == "atacante")
            const Def = jogadores.filter((item: Players) => item.posicao == "defensor")
            const mc = jogadores.filter((item: Players) => item.posicao == "meio-campista")
            const gole = jogadores.filter((item: Players) => item.posicao == "goleiro")



            generateBoxPlayer(Ata, document.getElementById('groupSlides')!)
            generateBoxPlayer(Def, document.getElementById('groupSlidesTwo')!)
            generateBoxPlayer(mc, document.getElementById('groupSlidesThree')!)
            generateBoxPlayer(gole, document.getElementById('groupSlidesFour')!)

        }

        else if (idadeMin > idadeMa || idadeMin == idadeMa || isNaN(idadeMin) || isNaN(idadeMa)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão')
            geral(0, 0, 100)
            idadeMi.value = "0"
            idadeMax.value = "100"
        }

    }
}
information(0, 0, 100)


function generateBoxPlayer(pos: Jogadores[], section: HTMLElement) {
    for (let index: number = 0; index < pos.length; index++) {
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
    let TotalPlayers = document.getElementsByClassName('BoxPlayers') as HTMLCollection;
    for (let index: number = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove()
        index--
    }
}