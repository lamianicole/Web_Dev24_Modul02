const changeBtn = document.querySelector('button') as HTMLButtonElement;
console.log(changeBtn);

const allExampleElements = document.getElementsByClassName('example') as HTMLCollection;
// HTMLCollection erfasst alle elemente mit der class example
console.log(allExampleElements[0]);
console.log(allExampleElements[1]);
console.log(allExampleElements[2]);
console.log(allExampleElements[3]);
console.log(allExampleElements[4]);
// brauche index, um jedes einzelne element zu ziehen
console.log(allExampleElements);

// changeBtn?.addEventListener('click', () => {
//     if (allExampleElements) {
//         for(let i = 0; i < allExampleElements.length; i++) {
//             (allExampleElements[i] as HTMLElement).style.backgroundColor = 'black', 
//             (allExampleElements[i] as HTMLElement).style.color = 'white';
//         }
//     }
// });



// ab hier Version, die zur Ursprungsfarbgebung zurückwechselt bei Klick:

let isChanged = false;
// brauchen hier boolean/Zustand, um Farbe bei erneutem Klick wieder zu wechseln

changeBtn?.addEventListener('click', () => {
    if (allExampleElements) {
        for (let i = 0; i < allExampleElements.length; i++) {
            const element = allExampleElements[i] as HTMLElement;
            if (isChanged) {
                element.style.backgroundColor = "",
                element.style.color = "";
                // Setze den Hintergrund und auch die Schriftfarbe auf den ursprünglichen Zustand (leerer String für den Standardzustand)
            } else {
                // Setze die Hintergrundfarbe zurück
                element.style.backgroundColor = "black", element.style.color = "white";
            }
        }
        // Ändere den Zustand
        isChanged = !isChanged;
    }
});

// Erklärung NOT-Operator (Zeile 46): Das ! ist der logische NOT-Operator, der den aktuellen Boolean-Wert der Variable umkehrt, sehr nützlich, wenn man Bedingungen umkehren muss oder Zustände toggeln möchte (etwa für das Umschalten von Zuständen wie z.B. das Ändern einer Hintergrundfarbe zwischen zwei Farben bei einem Klick)  