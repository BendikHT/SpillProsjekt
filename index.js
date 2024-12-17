/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/

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

function Oppdaterposisjon(){ 
    if (posX > 0){
        character.style.top = posY + "px";
    }
    else if (posX < 0){
        posX = 0
    }
    if (posY > 0){
        character.style.left = posX + "px";
    }


        
}
