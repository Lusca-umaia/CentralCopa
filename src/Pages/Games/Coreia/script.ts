const qualifyingGames = document.querySelectorAll(".games");
fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
  .then((data) => {
    if (!data.ok) {
      console.log(data);
    }
    return data.json();
  })
  .then((data) => {
    qualifyingGames.forEach((Element) => {
      Element;
    });
  });
