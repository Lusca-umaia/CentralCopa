fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores')
    .then(function (reponse) {
        return reponse.json()
    })
    .then(function (data) {
        Jogadores(data)
    })

function Jogadores(data) {
    let jogadores = data.filter(item => item.Selecao == "Argentina")
    let SectionAta = document.getElementById('groupSlides')
    let SectionDef = document.getElementById('groupSlidesTwo')
    let Sectionmc = document.getElementById('groupSlidesThree')
    let SectionGole = document.getElementById('groupSlidesFour')

    let Ata = jogadores.filter(item => item.posicao == "atacante")
    let Def = jogadores.filter(item => item.posicao == "defensor")
    let mc = jogadores.filter(item => item.posicao == "meio-campista")
    let gole = jogadores.filter(item => item.posicao == "goleiro")

    for (let index = 0; index < Ata.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        Box.classList.add('QuantAta')
        img.setAttribute('src', Ata[index].url_img);

        Name.innerText = Ata[index].nome
        idade.innerText = Ata[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(idade)
        SectionAta.appendChild(Box)
    }

    for (let index = 0; index < Def.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        Box.classList.add('QuantDef')

        img.setAttribute('src', Def[index].url_img);

        Name.innerText = Def[index].nome
        idade.innerText = Def[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(idade)
        SectionDef.appendChild(Box)
    }

    for (let index = 0; index < mc.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        Box.classList.add('QuantMc')

        img.setAttribute('src', mc[index].url_img);

        Name.innerText = mc[index].nome
        idade.innerText = mc[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(idade)
        Sectionmc.appendChild(Box)
    }

    for (let index = 0; index < gole.length; index++) {
        let Name = document.createElement('p')
        let idade = document.createElement('p')
        let Box = document.createElement('div')
        let img = document.createElement('img')

        Box.classList.add('BoxPlayers')
        Box.classList.add('Quantgole')

        img.setAttribute('src', gole[index].url_img);

        Name.innerText = gole[index].nome
        idade.innerText = gole[index].idade + " Anos"
        Box.appendChild(img)
        Box.appendChild(Name)
        Box.appendChild(idade)
        SectionGole.appendChild(Box)
    }
}