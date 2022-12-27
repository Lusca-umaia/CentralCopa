let idadeMi = document.getElementById('idadaMi') as HTMLInputElement;
let idadeMax = document.getElementById('idadeMax') as HTMLInputElement;

idadeMi.addEventListener('blur', function () {
    geral(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

idadeMax.addEventListener('blur', function () {
    geral(1, parseInt(idadeMi.value), parseInt(idadeMax.value))
})

interface Jogadores {
    "nome": string,
    "idade": number,
    "url_img": string,
    "Selecao": string,
    "posicao": string,
    [key: string]: any
}


function geral(Remov: number, idadeMin: number, idadeMa: number) {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            Jogadores(data)
        })

    function Jogadores(data: Jogadores) {
        if (Remov != 0) {
            removed()
        }

        if (idadeMin < idadeMa) {
            //Filtrar apenas os jogadores da Argentina
            let jogadores = data.filter((item: Jogadores) => item.Selecao == "Argentina")

            // --

            jogadores = jogadores.filter((item: Jogadores) => item.idade >= idadeMin && item.idade <= idadeMa)

            //Filtrar Jogadores a partir das suas posições
            let Ata = jogadores.filter((item: Jogadores) => item.posicao == "atacante")
            let Def = jogadores.filter((item: Jogadores) => item.posicao == "defensor")
            let mc = jogadores.filter((item: Jogadores) => item.posicao == "meio-campista")
            let gole = jogadores.filter((item: Jogadores) => item.posicao == "goleiro")
            // --

            //Gerar as seções com as informações dos respectivos jogadores e posições
            generate(Ata, document.getElementById('groupSlides')!)
            generate(Def, document.getElementById('groupSlidesTwo')!)
            generate(mc, document.getElementById('groupSlidesThree')!)
            generate(gole, document.getElementById('groupSlidesFour')!)
            // --
        }

        else if (idadeMin > idadeMa) {
            alert('Idade Mínima está acima da Idade Máxima - Idade máxima por padrão é 100')
            geral(0, 0, 100)
            idadeMi.value = "0"
            idadeMax.value = "100"
        }

    }
}
geral(0, 0, 100)

//Função para gerar as boxs de cada jogador com suas respectivas informações
function generate(pos: Jogadores[], section: HTMLElement) {
    for (let index: number = 0; index < pos.length; index++) {
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
// --

function removed() {
    let TotalPlayers = document.getElementsByClassName('BoxPlayers') as HTMLCollection;
    for (let index: number = 0; index < TotalPlayers.length; index++) {
        TotalPlayers[index].remove()
        index--
    }
}
