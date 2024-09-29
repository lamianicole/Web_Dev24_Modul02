// Typescript-Standard: arithmetische Operatoren 

// Multiplikation geht vor, und so wird 5 * 10 zuerst durchgeführt:  
// let score: number = 5 + 5 * 10; 
// console.log('Ergebnis: ' + score);
// ergibt 55

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern: 
let score = (5 + 5) * 10; 
console.log('Ergebnis: ' + score);
// ergibt 100

// Du kannst Werte auf Variablen addieren: 
// let score = 0; 
// score = score + 10; 
// console.log('Ergebnis: ' + score);  

// Hiervon gibt es eine verkürzte Version:
score += 10;  
console.log('Ergebnis: ' + score)

// Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:  
let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;

// Verwende den Inkrement-Operator:
zahl++;  
console.log('increment: ' + zahl);

// Verwende den Dekrement-Operator: 
zahl--;  
console.log('dekrement: ' + zahl);
