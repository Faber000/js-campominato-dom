bombs = [];
let bool = false;
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

        function() {
            userNumber = Number(element.innerText);

            if (bombs.includes(userNumber)) {
                endGame();  
            } 
            else {
                element.classList.add("safeNumber");
                element.addEventListener('click',
                    function() {
                        alert("hai già scelto questo numero");
                    }
                )
                cont = cont + 1;
            }
        }
    )
}

function endGame() {
    let element = document.createElement("h1");
    element.innerText = "Hai perso, il tuo punteggio è "+cont;
    container.innerHTML="";
    container.classList.add("finalContainer");
    container.append(element);
}
