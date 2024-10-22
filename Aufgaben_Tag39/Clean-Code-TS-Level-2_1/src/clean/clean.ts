// Original-Version
// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';
  
//   const userInput: number = Math.ceil(Math.random() * 7);
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);


// Version mit Kommentaren zur Erklärung
const getNumberText = (num: number | undefined): string =>
    ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';
// Wenn num vorhanden ist, ziehe 1 davon ab (weil Arrays bei 0 beginnen), sonst benutze -1.
// 'Unknown': Wenn das Ergebnis undefined ist (wie bei einer Zahl größer als 5 oder -1), gibt es 'Unknown' zurück.
const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);
const numberText = getNumberText(userInput);
console.log(numberText);


// Warum überhaupt *7, wenn es bis Five geht, ansonsten irgendwas mit if-else machen?

