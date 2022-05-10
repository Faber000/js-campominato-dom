bombs = [];
let cont = 0;
let userNumber;

for(let i=0; i < 16; i++) {
    let number;
    do {
         number = Math.floor(Math.random() * 100) + 1;
    }
    while(bombs.includes(number)) 

    bombs[i] = number;
}
const container = document.querySelector(".container");

for (let i=1; i <= 100; i++) {
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = i;
    container.append(element);
    element.addEventListener('click',

        function choise() {
            userNumber = Number(element.innerText);
            if (bombs.includes(userNumber)) {
                endGame();  
            } 
            else {
                element.classList.add("safeNumber");
                element.removeEventListener('click', choise);
                element.addEventListener('click',
                    function() {
                        alert("Hai già scelto questo numero!");
                    }
                )
                cont = cont + 1;
                if (cont==84) {
                    winGame();
                }
            }
        }
    )
}

function endGame() {
    let nodeList = document.querySelectorAll(".square");
    for(let i=0; i<100; i++) {
        if(bombs.includes(Number(nodeList[i].innerText))) {
            nodeList[i].classList.add("bombNumber");
        }
    }
    const body = document.querySelector("body");
    let element = document.createElement("h1");
    let divGameOver = document.createElement("div");
    element.innerText = "Hai perso, il tuo punteggio è "+cont;
    divGameOver.classList.add("divGameOver");
    divGameOver.append(element);
    body.append(divGameOver);

    for(let i=0; i<100; i++) {
        let element = document.getElementsByClassName("square")[i];
        element.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }, true);
    }   
}

function winGame() {
    const body = document.querySelector("body");
    body.classList.add("body-image-win");
    let element = document.createElement("h1");
    element.innerText = "Congratulazioni! Hai vinto!";
    container.innerHTML="";
    container.classList.add("finalContainer");
    container.append(element);
}
