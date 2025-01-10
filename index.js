    const character = document.getElementById("karakter")
    const aple = document.getElementById("eple")
    const toolbox1 = document.getElementById("toolbox1")


    let posX = 200
    let posY = 200
    let posXforskjell
    let posYforskjell
    let posXeple = Math.floor(Math.random() * window.innerWidth)
    let posYeple = Math.floor(Math.random() * window.innerHeight)
    const startlyd = document.getElementById("startlyd")


    function start(){
        const startside = document.getElementById("start");
        const startbutton = document.getElementById("startbutton")
        startlyd.play()

        setTimeout( function() {
            startside.style.display = "none";
            startside.style.zIndex = "0";
            musikk();
        }, 3100);   

        startside.classList.add("spillanimasjon");
        startbutton.classList.add("spillanimasjonbutton")
    }

    function Posisjoneple() {
        aple.style.top = posYeple + "px";
        aple.style.left = posXeple + "px";

        console.log(posXeple, posYeple)
    }
    Posisjoneple()



    document.addEventListener('keydown', event => {
        if (event.key === "w" || event.key === "ArrowUp") {
            posY -= 5;
            character.src = "bilder/karakter/opp.png"
            character.style.width = "30px"
        }
        if (event.key === "a" || event.key === "ArrowLeft") {
            posX -= 5;
            character.src = "bilder/karakter/venstre.png"
            character.style.width = "18px"
        }
        if (event.key === "s" || event.key === "ArrowDown") {
            posY += 5;
            character.src = "bilder/karakter/ned.png"
            character.style.width = "30px"
        }
        if (event.key === "d" || event.key === "ArrowRight") {
            posX += 5;
            character.src = "bilder/karakter/hoyre.png"
            character.style.width = "18px"
        }
        if (event.key === "e") {
            plukkOpp()
        }

        if (event.key === "q") {
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

    function plukkOpp() {
        posXforskjell = Math.abs(posXeple - posX);
        posYforskjell = Math.abs(posYeple - posY);
        console.log(posXforskjell, posYforskjell);

        if (posXforskjell <= 20 && posYforskjell <= 30 && !(eple.style.display == "none")) {
            eple.style.display = "none";
            console.log(eple.src)
            const bilde = document.createElement("img")
            bilde.src = eple.src
            toolbox1.appendChild(bilde)
        }
    }


    function plaser() {
        if (eple.style.display === "none") {
            eple.style.display = "block"
            posXeple = posX
            posYeple = posY
            aple.style.top = posYeple + "px";
            aple.style.left = posXeple + "px";

            toolbox1.removeChild(toolbox1.firstElementChild)
        }
    }

    function musikk() {
        const musicTracks = [
            'lyd/bakgrunnmusikk/music1.mp3',
            'lyd/bakgrunnmusikk/music2.mp3',
            'lyd/bakgrunnmusikk/music3.mp3'
        ];

        const audioElement = new Audio();
        audioElement.src = musicTracks[Math.floor(Math.random() * musicTracks.length)];
        audioElement.loop = true;
        audioElement.play();
    }


