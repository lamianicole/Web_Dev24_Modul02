//Funktion schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// [addEventListener() für den Klick auf den Button
// [selectedIndex()], um das ausgewählte Element aus dem Select zu holen
// [remove()], um über den Index das Element zu löschen

const farbeAuswaehlen = document.querySelector("#farbeAuswaehlen") as HTMLSelectElement;
const button = document.querySelector("#button") as HTMLButtonElement;

const optionLoeschen = () => {
    const listOfSelect = farbeAuswaehlen.children;
    const index = farbeAuswaehlen.selectedIndex;
    if (index >= 0) {
    listOfSelect[index].remove();
    }
};

button.addEventListener("click", optionLoeschen);


// Erklärung:
// const listOfSelect = farbeAuswahlen.children;
// holt alle child elements des Select-Elements(die Optionen)

// const index = farbeAuswahlen.selectedIndex;
// holt den Index der aktuell ausgewählten Option im Select-Element

// if (index >= 0) { listOfSelect[index].remove(); }
// überprüft, ob eine Option ausgewählt ist (index >= 0), und entfernt diese dann
