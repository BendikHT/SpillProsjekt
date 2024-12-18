const character = document.getElementById("karakter")
const aple = document.getElementById("eple")

let posX = 200
let posY = 200
let posXforskjell
let posYforskjell
const randomX = Math.floor(Math.random() * window.innerWidth)
const randomY = Math.floor(Math.random() * window.innerHeight)



function Posisjoneple() {
    aple.style.top = randomY + "px";
    aple.style.left = randomX + "px";

    console.log(randomX, randomY)
}
Posisjoneple()



document.addEventListener('keydown', function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
        console.log("w trykket");
        posY -= 5;
        character.src = "bilder/karakter/opp.png"
        character.style.width = "30px"
    }
    if (event.key === "a" || event.key === "ArrowLeft") {
        console.log("a trykket");
        posX -= 5;
        character.src = "bilder/karakter/venstre.png"
        character.style.width = "18px"
    }
    if (event.key === "s" || event.key === "ArrowDown") {
        console.log("s trykket");
        posY += 5;
        character.src = "bilder/karakter/ned.png"
        character.style.width = "30px"
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        console.log("d trykket");
        posX += 5;
        character.src = "bilder/karakter/hoyre.png"
        character.style.width = "18px"
    }
    if (event.key === "e"){
        console.log("e er trykket")
        plukkOpp()
    }
    Oppdaterposisjon()
});

function Oppdaterposisjon() {
    const maxX = window.innerWidth - 30;
    const maxY = window.innerHeight - 45;

    if (posX < 0) posX = 0;
    if (posX > maxX) posX = maxX;

    if (posY < 0) posY = 0;
    if (posY > maxY) posY = maxY;

    character.style.left = posX + "px";
    character.style.top = posY + "px";

    

}

function plukkOpp(){
    posXforskjell = randomX - posX
    posYforskjell = randomY - posY
    console.log(posXforskjell, posYforskjell)

    if (posXforskjell > -35 && posXforskjell < 35){
        eple.style.display = "none"
    }
}
