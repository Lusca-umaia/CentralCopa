var namePlayer = document.querySelector("#namePlayer");
var yearPlayer = document.querySelector("#yearPlayer");
var urlImagePlayer = document.querySelector("#urlImagePlayer");
var submitButton = document.querySelector("#submitButton");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function () {
    var newPlayer = {
        name: namePlayer.value,
        year: yearPlayer.value,
        urlImage: urlImagePlayer.value
    };
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayer)
    };
    console.log(newPlayer);
    fetch("https://apigenerator.dronahq.com/api/RavBVJez/ArthurFilmes", options)
        .then(function (data) {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then(function (update) {
        console.log(update);
    });
    namePlayer.value = "";
    yearPlayer.value = "";
    urlImagePlayer.value = "";
});
