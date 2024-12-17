/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/

const character = document.getElementById("karakter")

let posX = 200
let posY = 200

document.addEventListener('keydown', function (event) {
    if (event.key === "w") { 
        console.log("w trykket");
        posY -= 10; 
        character.style.top = posY + "px";
    }
    if (event.key === "a") {
        console.log("a trykket");
        posX -= 10; 
        character.style.left = posX + "px";
    }
    if (event.key === "s") {
        console.log("s trykket");
        posY += 10; 
        character.style.top = posY + "px";
    }
    if (event.key === "d") {
        console.log("d trykket");
        posX += 10;
        character.style.left = posX + "px";
    }
});

