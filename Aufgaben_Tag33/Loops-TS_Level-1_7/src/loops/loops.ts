// Erstelle einen Loop mit [do...while]
// Es sollen die Nummern von 1 bis 5 im HTML-Dokument ausgeben werden.


const output = document.querySelector('.output') as HTMLElement;

let counter2: number = 1;
do {
    console.log(`The number is ${counter2}`);
    output.innerHTML += `<p>The number is ${counter2}</p>`;
    counter2++;
} while(counter2 < 6)

// Template String: ${counter2} ist ein Platzhalter, der den aktuellen Wert von counter2 einfügt.

// output.innerHTML += `<p>The number is ${counter2}</p>`;
// output.innerHTML += ...: Fügt den neuen HTML-Inhalt zum bestehenden Inhalt des output-Elements hinzu.
// Template String: ${counter2} ist ein Platzhalter, der den aktuellen Wert von counter2 einfügt.
// Ergebnis: Fügt <p>The number is 1</p>, <p>The number is 2</p>, ..., <p>The number is 5</p> zum output-Element hinzu.
