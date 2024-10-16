// Aufgabe 1_1

const PI: number = Number(Math.PI.toFixed(2));

console.log(PI); 
// ergibt: 3.14
console.log(Math.PI);
// ergibt: 3.141592653589793
// toFixed braucht Number, sonst gibt es string aus!



// Aufgabe Level-1_2
// Schreibe eine Function, die eine Zahl rundet
let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

const roundedNumber = (num: number) => Math.round(num);
randomNumbers.forEach((elt) => console.log(roundedNumber(elt)));

// Math.round(num) verwendet die eingebaute Math.round-Funktion, um num zu runden auf nächste Ganzzahl
// forEach-Methode, um jedes Element im Array zu runden



// Aufgabe Level-1_3
// Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
let randomNum = Math.random();  
console.log(randomNum);
// Deklariere die Variable randomNum1\_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
let randomNum1_10 = Math.floor(Math.random() * 10);
console.log(randomNum1_10);
// Deklariere die Variable randomNum1\_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
let randomNum1_100 = Math.floor(Math.random() * 100);
console.log(randomNum1_100);



// Aufgabe Level-1_4
// Finde mit Math.min den niedrigsten Wert
// Finde mit Math.max den höchsten Wert

console.log(Math.min(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));

console.log(Math.max(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));
