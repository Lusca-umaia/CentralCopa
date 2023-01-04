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

const urlGames = fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')

const Container = document.getElementById('container') as HTMLElement;
const Qualifying = document.getElementById('qualifying') as HTMLElement;

async function generateGames() {
    const Games = await urlGames
    const objGames = await Games.json()

    let GamesSelection = objGames.filter((item: Jogos) => item.timeA == 'Argentina');
    let GamesSelectionTwo = objGames.filter((item: Jogos) => item.timeB == 'Argentina');

    for (let index = 0; index < GamesSelectionTwo.length; index++) {
        GamesSelection.push(GamesSelectionTwo[index]);
    }
    let qualifyingGames = GamesSelection.filter((item: Jogos) => item.fase == "Classificatória");

    createBoxClassification(qualifyingGames, Qualifying);

    if (GamesSelection.length > 3) {
        //octave
        let octaveGame = GamesSelection.filter((item: Jogos) => item.fase == "Oitavas-Final");
        if (octaveGame.length == 1) {
            createBox(octaveGame, Container);
        }
        //quarter
        let quarterGame = GamesSelection.filter((item: Jogos) => item.fase == "Quartas-Final");
        if (quarterGame.length == 1) {
            createBox(quarterGame, Container);
        }
        //Semi
        let semiGame = GamesSelection.filter((item: Jogos) => item.fase == "Semi-Final");
        if (semiGame.length == 1) {
            createBox(semiGame, Container);
        }
        //Final
        let finalGame = GamesSelection.filter((item: Jogos) => item.fase == "Final");
        if (finalGame.length == 1) {
            createBox(finalGame, Container);
        }
    }

}

generateGames()

function createBoxClassification(qualifyingGames: Jogos[], qualifying: HTMLElement) {
    for (let index = 0; index < qualifyingGames.length; index++) {
        let Game = document.createElement('p');
        let ResultGame = document.createElement('p');
        let box = document.createElement('div');
        let section = document.getElementById('contQualifying') as HTMLElement;
        let matchCollaps = document.getElementById('matchCollaps') as HTMLElement;
        Game.innerText = `${qualifyingGames[index].timeA} X ${qualifyingGames[index].timeB}`;
        ResultGame.innerText = `${qualifyingGames[index].gols.timeA} X ${qualifyingGames[index].gols.TimeB}`;
        box.appendChild(Game);
        box.appendChild(ResultGame);
        if (index == 1) {
            box.classList.add("BoxGameNone");
            matchCollaps.appendChild(box);
            qualifying.appendChild(matchCollaps);
        }
        else {
            box.classList.add("BoxGame");
            section.appendChild(box);
            qualifying.appendChild(section);
        }
    }
}
function createBox(playOffs: Jogos[], container: HTMLElement) {
    let Game = document.createElement('p');
    let ResultGame = document.createElement('p');
    let box = document.createElement('div');
    let fase = document.createElement('h2');
    let section = document.createElement('section');

    box.classList.add("BoxGame");
    section.classList.add("Section");

    fase.innerText = playOffs[0].fase;
    Game.innerText = `${playOffs[0].timeA} X ${playOffs[0].timeB}`;
    ResultGame.innerText = `${playOffs[0].gols.timeA} X ${playOffs[0].gols.TimeB}`;

    box.appendChild(Game);
    box.appendChild(ResultGame);
    section.appendChild(fase);
    section.appendChild(box);
    container.appendChild(section);

}
let Buttonn = document.getElementById('Button') as HTMLButtonElement;

Buttonn.addEventListener('click', () => {
    displayGame()
});

let Controll: number = 0;

function displayGame() {
    let matchCollaps = document.getElementById('matchCollaps') as HTMLDivElement;
    if (Controll == 0) {
        matchCollaps.style.display = "flex", 2000;
        Buttonn.innerText = "Ver Menos";
        Controll = 1;
    }
    else {
        matchCollaps.style.display = "";
        Buttonn.innerText = "Ver Mais";
        Controll = 0;
    }
}
