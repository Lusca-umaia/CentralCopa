"use strict";
let namePlayer = document.getElementById('namePlayer');
let age = document.getElementById('yearPlayer');
let url = document.getElementById('urlImagePlayer');
let selection = document.getElementById('selection');
let position = document.getElementById('position');
let submit = document.getElementById('sub');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (namePlayer.value != "", age.value != "", url.value != "", selection.value == "", position.value != "") {
        fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "nome": namePlayer.value,
                "idade": parseInt(age.value),
                "url_img": url.value,
                "Selecao": selection.value,
                "posicao": position.value
            }),
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            console.log(data);
        });
    }
    else {
        alert("Preencha todos os valores");
    }
});
