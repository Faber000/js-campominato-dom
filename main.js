bombs = [];
let bool = false;
let cont = 0;

for(let i=0; i < 16; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    bombs[i] = number;
}

let userNumbers = [];

for(let i=0; i < 84 && bool == false; i++) {

    let userNumber;

    do {
        userNumber = Number(prompt("inserisci un numero"));
    }
    while(userNumbers.includes(userNumber))

    userNumbers.push(userNumber);

    if(bombs.includes(userNumber)) {
        bool = true;
    } else {
        cont = cont + 1;
    }
}

if(bool) {
    alert("hai perso!");+
    alert("il tuo punteggio è "+cont);
} else {
    alert("hai vinto!");
}

