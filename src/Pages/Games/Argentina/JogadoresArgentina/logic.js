function geral() {
    fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            Jogadores(data)
        })

    function Jogadores(data) {
        //Filtrar apenas os jogadores da Argentina
        let jogadores = data.filter(item => item.Selecao == "Argentina")
        // --

        //Filtrar Jogadores a partir das suas posições
        let Ata = jogadores.filter(item => item.posicao == "atacante")
        let Def = jogadores.filter(item => item.posicao == "defensor")
        let mc = jogadores.filter(item => item.posicao == "meio-campista")
        let gole = jogadores.filter(item => item.posicao == "goleiro")
        // --

        //Gerar as seções com as informações dos respectivos jogadores e posições
        generate('QuantAta', Ata, document.getElementById('groupSlides'))
        generate('QuantDef', Def, document.getElementById('groupSlidesTwo'))
        generate('QuantMc', mc, document.getElementById('groupSlidesThree'))
        generate('Quantgole', gole, document.getElementById('groupSlidesFour'))
        // --
    }
}
geral()

//Função para gerar as boxs de cada jogador com suas respectivas informações
function generate(quant, pos, section) {
    for (let index = 0; index < pos.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        Box.classList.add(quant)
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