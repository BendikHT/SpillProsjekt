const character = document.getElementById("karakter")

let posX = 200
let posY = 200

document.addEventListener('keydown', function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
        console.log("w trykket");
        posY -= 5;
    }
    if (event.key === "a" || event.key === "ArrowLeft") {
        console.log("a trykket");
        posX -= 5;
    }
    if (event.key === "s" || event.key === "ArrowDown") {
        console.log("s trykket");
        posY += 5;
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        console.log("d trykket");
        posX += 5;
    }
    Oppdaterposisjon()

});

function Oppdaterposisjon() {
    const characterWidth = character.offsetWidth;
    const characterHeight = character.offsetHeight;

    const maxX = window.innerWidth - characterWidth;
    const maxY = window.innerHeight - characterHeight;

    if (posX < 0) posX = 0;
    if (posX > maxX) posX = maxX;

    if (posY < 0) posY = 0;
    if (posY > maxY) posY = maxY;

    character.style.left = posX + "px";
    character.style.top = posY + "px";
}
