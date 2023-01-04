let ageMinimum = document.getElementById('ageMin') as HTMLInputElement;
let ageMaximum = document.getElementById('ageMax') as HTMLInputElement;

ageMinimum.addEventListener('blur', function () {
    generatePlayers(1, parseInt(ageMinimum.value), parseInt(ageMaximum.value))
    console.log(parseInt(ageMinimum.value))
})

ageMaximum.addEventListener('blur', function () {
    generatePlayers(1, parseInt(ageMinimum.value), parseInt(ageMaximum.value))
    console.log(parseInt(ageMaximum.value))
})

interface Players {
    "nome": string,
    "idade": number,
    "url_img": string,
    "Selecao": string,
    "posicao": string,
    [key: string]: any
}

function generatePlayers(remove: number, ageMin: number, ageMax: number) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            generatingPlayers(data)
        })

    function generatingPlayers(objPlayers: Players[]) {
        if (remove != 0) {
            removingPlayers()
        }

        if (ageMin < ageMax && ageMin != ageMax) {

            let Players = objPlayers.filter((item: Players) => item.Selecao == "Argentina")

            Players = Players.filter((item: Players) => item.idade >= ageMin && item.idade <= ageMax)
            let att = Players.filter((item: Players) => item.posicao == "atacante")
            let def = Players.filter((item: Players) => item.posicao == "defensor")
            let mc = Players.filter((item: Players) => item.posicao == "meio-campista")
            let gk = Players.filter((item: Players) => item.posicao == "goleiro")
            createBoxPlayers(att, document.getElementById('groupSlides')!)
            createBoxPlayers(def, document.getElementById('groupSlidesTwo')!)
            createBoxPlayers(mc, document.getElementById('groupSlidesThree')!)
            createBoxPlayers(gk, document.getElementById('groupSlidesFour')!)
        }

        else if (ageMin > ageMax || ageMin == ageMax || isNaN(ageMin) || isNaN(ageMax)) {
            alert('Informe valores coerentes - Os valores retornarão ao padrão')
            generatePlayers(0, 0, 100)
            ageMinimum.value = "0"
            ageMaximum.value = "100"
        }
    }

}
generatePlayers(0, 0, 100)

function createBoxPlayers(positionPlayer: Players[], section: HTMLElement) {
    for (let index: number = 0; index < positionPlayer.length; index++) {
        let Name = document.createElement('p')
        let age = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        img.setAttribute('src', positionPlayer[index].url_img);

        Name.innerText = positionPlayer[index].nome
        age.innerText = positionPlayer[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(age)
        section.appendChild(Box)
    }
}

function removingPlayers() {
    let TotalPlayers = document.getElementsByClassName('BoxPlayers') as HTMLCollection;
    for (let index: number = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove()
        index--
    }
}