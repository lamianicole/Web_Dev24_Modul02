// Level-1_1

// part 1
window.setTimeout(() => {
    console.log("A Message to You, Rudy...");
}, 3000);


// part 2
let counter: number = 11;

const countdown = setTimeout(() => {
    console.log("Start: Warten für 3 Sekunden...");
}, 3000);

const interval = setInterval(() => {
    counter--;
    if (counter === 8) {
        console.log("Erledigt. Du hast 3 Sekunden verschwendet");
    } else if(counter === 0) {
        console.log("Endlich Feierabend!");
        clearInterval(interval);
    }
    else{
        console.log(counter);
    }
}, 3000);


// Level-1_2
const zeit = document.querySelector(".zeit") as HTMLDivElement;
const startBtn = document.querySelector("#btn") as HTMLButtonElement;

let counter: number = 100;
startBtn?.addEventListener('click', () => {
    const interval = setInterval(() => {
        if(counter === 0) {
            clearInterval(interval);
        } else {
            counter--;
            zeit.innerText = `${counter}%`;
        }
    }, 200);
})

// für mich mit Kommentaren...Step by Step
// Zähler initialisieren
// let counter: number = 100;
// EventListener für Button samt elvis operator
// startBtn?.addEventListener('click', () => {
// Intervall setzen, das jede 0,1 Sekunde (100 Millisekunden) ausgeführt wird
//     const interval = setInterval(() => {
// Wenn der Zähler 0 erreicht hat, Intervall stoppen
//         if(counter === 0) {
//             clearInterval(interval);
//         } else {
// Zähler um 1 verringern
//             counter--;
// Zählerwert im Element anzeigen lassen
//             zeit.innerText = `${counter}%`;
//         }
// Intervall alle 500 Millisek.
//     }, 500);
// })


// Level 1_3
const getBrowserData = () => {
    console.log("Browsername", navigator.userAgent);
}

getBrowserData()