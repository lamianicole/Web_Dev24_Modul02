// - Die Methode toFixed(y) liefert y Nachkommastellen, also die Länge nach dem Dezimalpunkt.
// - Konvertiere alle Zahlen zu 2 Nachkommastellen und lass Dir mit der Konsole das Ergebnis anzeigen.

// let num: number = 15.16698;
// console.log(num.toFixed(2));
// ergibt: 15.17

// let num: number = 7.78714;
// console.log(num.toFixed(2));
// ergibt: 7.79

// let num: number = Number("12.3");
// console.log(num.toFixed(2));
// ergibt: 12.30

// let num: number = Number(true);
// console.log(num.toFixed(2));
// ergibt: 1.00

// let num: number = Number(false);
// console.log(num.toFixed(2));
// ergibt: 0.00

// let num: number = Number("321");
// console.log(num.toFixed(2));
//ergibt: 321.00

let num: number = Number("Supercode");
console.log(num.toFixed(2));
// ergibt: NaN