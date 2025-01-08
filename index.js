const character = document.getElementById("karakter")
const aple = document.getElementById("eple")

let posX = 200
let posY = 200
let posXforskjell
let posYforskjell
let posXeple = Math.floor(Math.random() * window.innerWidth)
let posYeple = Math.floor(Math.random() * window.innerHeight)



function Posisjoneple() {
    aple.style.top = posYeple + "px";
    aple.style.left = posXeple + "px";

    console.log(posXeple, posYeple)
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

    if (event.key === "q"){
        console.log("q er trykket")
        plaser()
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
    posXforskjell = Math.abs(posXeple - posX);
    posYforskjell = Math.abs(posYeple - posY);
    console.log(posXforskjell, posYforskjell);

    if (posXforskjell <= 35 && posYforskjell <= 35){
        eple.style.display = "none";
    }
}


function plaser(){
    if(eple.style.display === "none"){
        eple.style.display = "block"
        posXeple = posX
        posYeple = posY
        aple.style.top = posYeple + "px";
        aple.style.left = posXeple + "px";
    }
}
