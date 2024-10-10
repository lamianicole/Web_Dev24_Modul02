// Aufgabe 1_1

for (let i = 0; i < 10; i++) {
    console.log("Hello World " + i);
}


// Level-1_2

let numbersToTen: number[] = [];
for (let i = 0; i < 11; i++) {
    numbersToTen.push(i);
}
console.log(numbersToTen);


// Level-1_4
const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let people: number = 0; people < friendNames.length; people++){
    console.log(friendNames[people]);
}
// let people: hier geht nur let, nicht const!!

// hier mit for of:
for (const person of friendNames){
    console.log(person);
}


// Level-1_11
function calculateSum(maxNumber: number): number {
    let sum = 0;
    for (let i = 1; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
    }

const result = calculateSum(10);
console.log(result); // ergibt: 55

// Schreibweise mit Arrowfunction:
const calculateSum = (maxNumber: number) => {
    let sum: number = 0;
    for (let i: number = 1; i <= maxNumber; i++) {
        sum += i;
    }
    console.log(sum);
};
calculateSum(83);
