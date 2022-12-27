interface gols {
    timeA: number,
    TimeB: number
}

interface Jogos {
    "timeA": string,
    "timeB": string,
    "data": string,
    "gols": gols,
    "fase": string
}

fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        Jogos(data, "Argentina")
    });

function Jogos(Dados: Jogos[], time: string) {
    const cont = document.getElementById('cont') as HTMLElement;
    const classi = document.getElementById('classi') as HTMLElement;
    let filterOne = Dados.filter(item => item.timeA == time)
    let filterTwo = Dados.filter(item => item.timeB == time)

    for (let index: number = 0; index < filterTwo.length; index++) {
        filterOne.push(filterTwo[index])
    }

    let classifi = filterOne.filter(item => item.fase == "Classificatória")

    Classi(classifi, classi)

    if (filterOne.length > 3) {
        //Oitavas
        let oitavas = filterOne.filter(item => item.fase == "Oitavas-Final")
        if (oitavas.length == 1) {
            CreateBox(oitavas, cont)
        }

        //Quartas
        let quartas = filterOne.filter(item => item.fase == "Quartas-Final")
        if (quartas.length == 1) {
            CreateBox(quartas, cont)
        }

        //Semi
        let semi = filterOne.filter(item => item.fase == "Semi-Final")
        if (semi.length == 1) {
            CreateBox(semi, cont)
        }

        //Final
        let final = filterOne.filter(item => item.fase == "Final")
        if (final.length == 1) {
            CreateBox(final, cont)
        }
    }
}

function Classi(classifi: Jogos[], classi: HTMLElement) {
    for (let index: number = 0; index < classifi.length; index++) {
        let Game = document.createElement('p')
        let ResultGame = document.createElement('p')
        let box = document.createElement('div')
        let section = document.getElementById('contClassi') as HTMLElement;
        let contCollaps = document.getElementById('contCollaps') as HTMLElement;

        Game.innerText = `${classifi[index].timeA} X ${classifi[index].timeB}`
        ResultGame.innerText = `${classifi[index].gols.timeA} X ${classifi[index].gols.TimeB}`
        box.appendChild(Game)
        box.appendChild(ResultGame)

        if (index == 1) {
            box.classList.add("BoxGameNone")
            contCollaps.appendChild(box)
            classi.appendChild(contCollaps)
        }
        else {
            box.classList.add("BoxGame")
            section.appendChild(box)
            classi.appendChild(section)
        }
    }
}

function CreateBox(mata_mata: Jogos[], cont: HTMLElement) {
    //Variáveis

    let Game = document.createElement('p')
    let ResultGame = document.createElement('p')
    let box = document.createElement('div')
    let fase = document.createElement('h2')
    let section = document.createElement('section')

    // --

    //Adicionando classes aos elementos
    box.classList.add("BoxGame")
    section.classList.add("Section")
    // --

    //Atribuição de Valores
    fase.innerText = mata_mata[0].fase
    Game.innerText = `${mata_mata[0].timeA} X ${mata_mata[0].timeB}`
    ResultGame.innerText = `${mata_mata[0].gols.timeA} X ${mata_mata[0].gols.TimeB}`
    // --

    //Integrando elementos ao código
    box.appendChild(Game)
    box.appendChild(ResultGame)
    section.appendChild(fase)
    section.appendChild(box)
    cont.appendChild(section)
    // --
}

let Button = document.getElementById('Button') as HTMLButtonElement;
let contCollaps = document.getElementById('contCollaps') as HTMLDivElement;
let controle_: number = 0
Button.addEventListener('click', function () {
    if (controle_ == 0) {
        contCollaps.style.display = "flex", 2000
        Button.innerText = "Ver Menos"
        controle_ = 1
    }
    else {
        contCollaps.style.display = ""
        Button.innerText = "Ver Mais"
        controle_ = 0
    }
})