const character = document.getElementById("karakter")
const aple = document.getElementById("eple")
const startlyd = document.getElementById("startlyd")
const bilde = document.createElement("img")
const portal = document.getElementById("portal")
let posX = 200
let posY = 200
let posXforskjell
let posYforskjell
let posXeple = Math.floor(Math.random() * window.innerWidth)
let posYeple = Math.floor(Math.random() * window.innerHeight)
let toolboxdiv;
let toolboxmarkert;

document.getElementById("toolbox1").classList.add("markertToolbox")

function start() {
    const startside = document.getElementById("start");
    const startbutton = document.getElementById("startbutton")
    document.getElementById("startskjerm").disabled = true; 
    startlyd.play()
    startlyd.volume = 0; //litt usikker på om jeg skal ha startmusikk
    karakter.style.opacity = "0"

    setTimeout(function () {
        startside.style.display = "none";
        startside.style.zIndex = "0";
        musikk();
        karakter.classList.add("kakarteranimasjon")
        portal.classList.add("portalanimasjon")
    }, 3100);

    setTimeout(function () {
        portal.style.display = "none"
        karakter.style.opacity = "1"
    }, 6100)

    startside.classList.add("spillanimasjon");
    startbutton.classList.add("spillanimasjonbutton")
}

function Posisjoneple() {
    aple.style.top = posYeple + "px";
    aple.style.left = posXeple + "px";
}
Posisjoneple()

document.addEventListener('keydown', event => { 
    if (event.key === "w" || event.key === "ArrowUp") {
        posY -= 5;
        character.src = "bilder/karakter/opp.png"
        character.style.width = "30px"
        character.style.transform = "translate(-15px)"
    }
    if (event.key === "a" || event.key === "ArrowLeft") {
        posX -= 5;
        character.src = "bilder/karakter/venstre.png"
        character.style.width = "18px"
        character.style.transform = "translate(-9px)"
    }
    if (event.key === "s" || event.key === "ArrowDown") {
        posY += 5;
        character.src = "bilder/karakter/ned.png"
        character.style.width = "30px"
        character.style.transform = "translate(-15px)"
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        posX += 5;
        character.src = "bilder/karakter/hoyre.png"
        character.style.width = "18px"
        character.style.transform = "translate(-9px)"
    }
    if (event.key === "e") {
        plukkOpp()
    }

    if (event.key === "q") {
        plaser()
    }
    if (event.key >= "1" && event.key <= "6") {
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`toolbox${i}`).classList.remove("markertToolbox")   ;
        }
        document.getElementById(`toolbox${event.key}`).classList.add("markertToolbox");
        toolboxdiv = document.getElementById(`toolbox${event.key}`);
        console.log(toolboxdiv)
        toolboxmarkert = `toolbox${event.key}`
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

function plukkOpp() {
    posXforskjell = Math.abs(posXeple - posX);
    posYforskjell = Math.abs(posYeple - posY);

    if (posXforskjell <= 20 && posYforskjell <= 30 && !(eple.style.display == "none")) {
        eple.style.display = "none";
        console.log(eple.src)
        bilde.src = eple.src
        toolboxdiv.appendChild(bilde)
    }
}


function plaser() {
    if (eple.style.display === "none") {
        eple.style.display = "block"
        posXeple = posX
        posYeple = posY
        aple.style.top = posYeple + "px";
        aple.style.left = posXeple + "px";

        if (toolboxdiv.firstElementChild) {
            toolboxdiv.removeChild(toolboxdiv.firstElementChild);
        }
    }
}

function musikk() {
    const spilleliste = [
        'lyd/bakgrunnmusikk/music1.mp3',
        'lyd/bakgrunnmusikk/music2.mp3',
        'lyd/bakgrunnmusikk/music3.mp3'
    ];

    const audio = new Audio();
    audio.src = spilleliste[Math.floor(Math.random() * spilleliste.length)];
    audio.loop = true;
    audio.play();
    audio.volume = 0.2; //orker ikke musikk mens jeg jobber. verdi skal være 0.2
}

function spawn() {
    
}