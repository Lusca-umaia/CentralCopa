const namePlayer = document.querySelector("#namePlayer") as HTMLInputElement;
const yearPlayer = document.querySelector("#yearPlayer") as HTMLInputElement;
const urlImagePlayer = document.querySelector(
  "#urlImagePlayer"
) as HTMLInputElement;
const submitButton = document.querySelector(
  "#submitButton"
) as HTMLButtonElement;

submitButton?.addEventListener("click", () => {
  const newPlayer = {
    name: namePlayer.value,
    year: yearPlayer.value,
    urlImage: urlImagePlayer.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlayer),
  };
  console.log(newPlayer);
  fetch("", options)
    .then((data) => {
      if (!data.ok) {
        console.log(data);
      }
      return data.json();
    })
    .then((update) => {
      console.log(update);
    });
  namePlayer.value = "";
  yearPlayer.value = "";
  urlImagePlayer.value = "";
});
