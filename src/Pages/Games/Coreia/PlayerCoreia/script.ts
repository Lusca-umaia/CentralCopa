const imgPlayer = document.querySelectorAll("#imgPlayer");
const namePlayer = document.querySelector("#namePlayer");
const agePlayer = document.querySelectorAll("#agePlayer");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
  .then((data) => {
    if (!data.ok) {
      console.log(data);
    }
    return data.json();
  })
  .then((data) => {
    interface data {
      nome: string,
      url_: string,
      idade: number,
      Selecao: string,
      posicao: string,
    }
    const games = data.filter((element: data) => {
      if (element.timeA === "Coreia" || element.timeB === "Coreia") {
        return element;
      }
    });
    games.forEach((element: data, index: number) => {
      namePlayer[index].textContent = element.nome;
      imgPlayer[index].textContent = element.url _img;
      agePlayer[index].textContent = element.gols.idade;
    });
  });
