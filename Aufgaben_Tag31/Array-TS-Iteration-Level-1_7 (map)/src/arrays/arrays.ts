// Level 1_7
let fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];

const fruitsJuice: string[] = fruits.map((fruit: string) => {
    return fruit + '🥤';
});

console.log(fruitsJuice);
//  ergibt in Konsole: ['🍇🥤', '🍌🥤', '🍒🥤', '🍎🥤']   



// Level 1_8
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Schreibe eine Function printEvenNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
const printEvenNumbers = () => {
    const evenNumbers: number[] = zahlen.filter((num: number) => num % 2 === 0);
    return console.log(evenNumbers);
};
printEvenNumbers();
//  ergibt array: [2, 4, 6, 8, 10]

// Schreibe eine Function printOddNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
const printOddNumbers = () => {
    const oddNumbers: number[] = zahlen.filter((num: number) => num % 2 !== 0);
    return console.log(oddNumbers);
};
printOddNumbers();
// ergibt array: [1, 3, 5, 7, 9]