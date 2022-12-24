let menu = document.getElementById("menuu");
let control = 0;

function controle() {
    if (window.screen.width > 800) {
        control = 0;
        document.getElementById('nav').style.height = "";
    }
}

menu.addEventListener("click", function () {
    if (control == 0) {
        document.getElementById('nav').style.height = "250px";
        control = 1;
    } else {
        document.getElementById('nav').style.height = "";
        control = 0;
    }
});

setInterval(controle, 1000)