let menu = document.getElementById("menu") as HTMLDivElement;
let Nav = document.getElementById('nav') as HTMLElement;
let control: number = 0;

function controle() {
    if (window.screen.width > 800) {
        control = 0;
        Nav.style.height = ""
    }
}

menu.addEventListener("click", function () {
    if (control == 0) {
        Nav.style.height = "250px";
        control = 1;
    } else {
        Nav.style.height = "";
        control = 0;
    }
});

setInterval(controle, 1000)