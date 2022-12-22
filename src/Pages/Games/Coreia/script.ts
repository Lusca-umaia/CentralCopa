const timeA = document.querySelectorAll(".timeA");
const timeB = document.querySelectorAll(".timeB");
const golA = document.querySelectorAll(".golA");
const golB = document.querySelectorAll(".golB");
const buttonMoreAbout = document.querySelector("#moreAbout");
const qualifyingGames = document.querySelector<HTMLElement>(".qualifyingGames");
const gameNone = document.querySelector<HTMLElement>(".gameNone");
fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
  .then((data) => {
    if (!data.ok) {
      console.log(data);
    }
    return data.json();
  })
  .then((data) => {
    interface data {
      timeA: string;
      timeB: string;
      data: string;
      gols: {
        timeA: string;
        TimeB: string;
      };
      fase: string;
      id: number;
    }
    const games = data.filter((element: data) => {
      if (element.timeA === "Coreia" || element.timeB === "Coreia") {
        return element;
      }
    });
    games.forEach((element: data, index: number) => {
      timeA[index].textContent = element.timeA;
      timeB[index].textContent = element.timeB;
      golA[index].textContent = element.gols.timeA;
      golB[index].textContent = element.gols.TimeB;
    });
  });
buttonMoreAbout?.addEventListener("click", () => {
  if (buttonMoreAbout.textContent === "Ver Menos") {
    buttonMoreAbout.textContent = "Ver Mais";
    gameNone.style.display = "none";
    qualifyingGames.style.height = "20vh";
  } else {
    buttonMoreAbout.textContent = "Ver Menos";
    gameNone.style.display = "block";
    qualifyingGames.style.height = "30vh";
  }
});
