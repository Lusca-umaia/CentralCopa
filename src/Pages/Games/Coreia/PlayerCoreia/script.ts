const ageMin = document.getElementById('ageMin') as HTMLInputElement;
const ageMax = document.getElementById('ageMax') as HTMLInputElement;

ageMin.addEventListener('blur', function () {
    handleInformationPlayers(1, parseInt(ageMin.value), parseInt(ageMax.value))
})

ageMax.addEventListener('blur', function () {
    handleInformationPlayers(1, parseInt(ageMin.value), parseInt(ageMax.value))
})

interface Players {
    nome: string,
    idade: number,
    url_img: string,
    Selecao: string,
    posicao: string,
}


function handleInformationPlayers(remove: number, idadeMin: number, idadeMa: number) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            handlePlayers(data)
        })

    function handlePlayers(data: Players) {
        if (remove != 0) {
            removed()
        }

        if (idadeMin < idadeMa && idadeMin != idadeMa) {

            let jogadores = data.filter((item: Players) => item.Selecao == "Coreia")



            jogadores = jogadores.filter((item: Players) => item.idade >= idadeMin && item.idade <= idadeMa)


            const Ata = jogadores.filter((item: Players) => item.posicao == "atacante")
            const Def = jogadores.filter((item: Players) => item.posicao == "defensor")
            const mc = jogadores.filter((item: Players) => item.posicao == "meio-campista")
            const gole = jogadores.filter((item: Players) => item.posicao == "goleiro")



            generateBoxPlayer(Ata, document.getElementById('playersAta')!)
            generateBoxPlayer(Def, document.getElementById('playersDef')!)
            generateBoxPlayer(mc, document.getElementById('playersMc')!)
            generateBoxPlayer(gole, document.getElementById('playersAtaGole')!)

        }

        else if (idadeMin > idadeMa || idadeMin == idadeMa || isNaN(idadeMin) || isNaN(idadeMa)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão')
            handleInformationPlayers(0, 0, 100)
            ageMin.value = "0"
            ageMax.value = "100"
        }

    }
}
handleInformationPlayers(0, 0, 100)


function generateBoxPlayer(pos: Players[], section: HTMLElement) {
    for (let index: number = 0; index < pos.length; index++) {
        const name = document.createElement('p')
        const age = document.createElement('p')
        const box = document.createElement('div')
        const img = document.createElement('img')

        box.classList.add('BoxPlayers')
        img.setAttribute('src', pos[index].url_img);

        name.innerText = pos[index].nome
        age.innerText = pos[index].idade + " Anos"
        box.appendChild(img)
        box.appendChild(name)
        box.appendChild(age)
        section.appendChild(box)
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