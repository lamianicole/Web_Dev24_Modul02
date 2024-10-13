// HTML-Elemente holen und nach Typ casten
let oAmount = document.querySelector ('#oAmount') as HTMLInputElement;
let loopBtn = document.querySelector ('#loopBtn') as HTMLInputElement;
let outputLoop = document.querySelector ('#outputLoop') as HTMLElement;

// Testen
console.log(oAmount);
console.log(loopBtn);
console.log(outputLoop);

// Konstante deklarieren/Arrow Function für Loop-Wörter
const createNewLoop = () => {
    const oCount = parseInt(oAmount.value);
// Wert des Eingabefeldes (=string) holen und wurde in integer (Ganzzahl) umgewandelt 

// string für output erstellen mit for-loop
    let result = "L";
    for (let i = 0; i < oCount; i++) {
        result += "o";
    }
    result += "p";

// Ergebnis im HTML-Element anzeigen 
    outputLoop.innerText = result;
}

// Dem Button den click Event Listener hinzufügen
loopBtn.addEventListener("click", createNewLoop);

// Testen
console.log(createNewLoop);


