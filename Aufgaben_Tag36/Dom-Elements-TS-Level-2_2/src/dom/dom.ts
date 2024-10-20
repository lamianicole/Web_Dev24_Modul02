// Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.
// Definiere einen Typ SimplePerson. Lege in der jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält. 
// Lass dir das Objekt auf der Konsole ausgeben

const submitButton = document.querySelector('#submitButton') as HTMLInputElement;
const inputVorname = document.querySelector('#vorname') as HTMLInputElement;
const inputNachname = document.querySelector('#nachname') as HTMLInputElement;
const land = document.querySelector('#land') as HTMLSelectElement;

// den type definieren
type SimplePerson = {
    vorname: string,
    nachname: string,
    land: string
};

//  Objekt vom type simplePerson erstellen
const person1: SimplePerson = {
    vorname: "",
    nachname: "",
    land: ""
};

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // verhindert, das Standardverhalten des Formulars, und zwar das Absenden
    console.log(inputVorname.value);
    console.log(inputNachname.value);
    console.log(land.value);
    // Werte aus dem Formular ausgeben...

    // ...und in das Objekt person1 speichern
    person1.vorname = inputVorname.value;
    person1.nachname = inputNachname.value;
    person1.land = land.value;

    console.log(person1);
});