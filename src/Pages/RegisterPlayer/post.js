let inputChe = document.getElementsByClassName('inputChe')
let nome = document.getElementById('namePlayer')
let idade = document.getElementById('yearPlayer')
let url = document.getElementById('urlImagePlayer')
let selecao = document.getElementById('Selecao')
let posicao = document.getElementById('Posicao')

let submit = document.getElementById('sub')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    if (nome.value != "", idade.value != "", url.value != "", selecao.value == "", posicao.value != "") {
        fetch('https://apigenerator.dronahq.com/api/Ky18EWHd/Jogadores/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    "nome": nome.value,
                    "idade": parseInt(idade.value),
                    "url_img": url.value,
                    "Selecao": selecao.value,
                    "posicao": posicao.value
                }),
            })
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                console.log(data)
            });
    }

    else {
        alert("Preencha todos os valores")
    }
})