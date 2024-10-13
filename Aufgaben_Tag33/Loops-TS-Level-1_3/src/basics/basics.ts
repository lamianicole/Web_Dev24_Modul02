// Level 1_3

let counter: number = 0;
while(counter < 10) {
    console.log(`London Calling ${counter}`);
    counter++;
};


// Der Code zählt von 0 bis 9 und gibt bei jeder Zahl London Calling gefolgt von der aktuellen Zahl aus. Am Anfang ist counter auf 0 gesetzt. Die Schleife läuft, solange counter < 10 ist. Bei jedem Durchlauf der Schleife wird counter um 1 erhöht und der aktuelle Wert auf der Konsole angezeigt. Die Schleife hört auf, wenn counter den Wert 10 erreicht, weil die Bedingung counter < 10 dann nicht mehr erfüllt ist.


// Level 1_7
const outputLoops = document.querySelector("#outputLoops") as HTMLElement;

let anotherCounter: number = 1;
do {
    outputLoops.innerHTML += `The number is ${anotherCounter}<br>`;
    anotherCounter++;
} while (anotherCounter < 6);

// Zeile 18 <br>, sonst läuft es ohne Umbruch weiter!