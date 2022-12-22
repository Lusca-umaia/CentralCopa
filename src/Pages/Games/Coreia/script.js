var timeA = document.querySelectorAll(".timeA");
var timeB = document.querySelectorAll(".timeB");
var golA = document.querySelectorAll(".golA");
var golB = document.querySelectorAll(".golB");
var buttonMoreAbout = document.querySelector("#moreAbout");
var qualifyingGames = document.querySelector(".qualifyingGames");
var gameNone = document.querySelector(".gameNone");
fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
    .then(function (data) {
    if (!data.ok) {
        console.log(data);
    }
    return data.json();
})
    .then(function (data) {
    var games = data.filter(function (element) {
        if (element.timeA === "Coreia" || element.timeB === "Coreia") {
            return element;
        }
    });
    games.forEach(function (element, index) {
        timeA[index].textContent = element.timeA;
        timeB[index].textContent = element.timeB;
        golA[index].textContent = element.gols.timeA;
        golB[index].textContent = element.gols.TimeB;
    });
});
buttonMoreAbout === null || buttonMoreAbout === void 0 ? void 0 : buttonMoreAbout.addEventListener("click", function () {
    if (buttonMoreAbout.textContent === "Ver Menos") {
        buttonMoreAbout.textContent = "Ver Mais";
        gameNone.style.display = "none";
        qualifyingGames.style.height = "20vh";
    }
    else {
        buttonMoreAbout.textContent = "Ver Menos";
        gameNone.style.display = "block";
        qualifyingGames.style.height = "30vh";
    }
});
