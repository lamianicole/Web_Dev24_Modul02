// zwei Variablen erstellen: firstName und lastName.
// Leerzeichen werden mitgezählt, stünde hier "Max "
let firstName: string = "Max";
let lastName: string = "Mustermann";

// Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.
console.log(firstName.length);
console.log(lastName.length);

// oder beide zusammen
// console.log(firstName.length + lastName.length);

// Erstelle noch eine Variable fullName, die ein Verbindung der beiden Variablen ist.
let fullName: string = firstName + lastName;

// die Länge der Variable fullName in der Konsole anzeigen lassen.
console.log(fullName.length);
