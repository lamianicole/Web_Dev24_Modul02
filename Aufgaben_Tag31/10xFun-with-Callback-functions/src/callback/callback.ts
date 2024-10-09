//function vs. arrow function
const sum = function(a, b) {
    return a + b;
}

// ... ist das Gleiche wie Arrow function (Kurzschreibweise):
const sum = (a, b) => {
    return a + b;
}

//...oder noch kürzer:
const sum = (a, b) => a + b;



// forEach()
const fruits: string[] = ["Apfel", "Banane", "Kirsche"];

fruits.forEach((fruit) => {
    console.log(fruit);
});
//   ergibt:
//   Apfel
//   Banane
//   Kirsche


// map()
const uppercasedFruits: string[] = fruits.map((fruit) => fruit.toUpperCase());

console.log(uppercasedFruits); 
// ["APFEL", "BANANE", "KIRSCHE"]


// filter()
const fruitsWithA: string[] = fruits.filter((fruit) => fruit.includes("a"));

console.log(fruitsWithA); // ["Banane"]

// const fruitsWithA: string[] = fruits.filter((fruit) => fruit.includes("A"));
// console.log(fruitsWithA); // ['Apfel'] 


// forEach()
const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});
// ergibt:
// 1
// 2
// 3
// 4
// 5

// map()
let doubledNumbers: number[] = numbers.map((number) => 
    number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// sort() Compare function
const musicians: string[] = ["Doja Cat", "Aqua Stone Throne", "Nils Frahm", "Lagwagon", "Ruger Hauer", "The Wanton Bishops", "Vitalic", "Descendents"];
console.log(musicians);


const musiciansUp = (a: string, b: string) => {
    return a.localeCompare(b);
}

console.log(musicians.sort(musiciansUp));

const musiciansDown = (a: string, b: string) => {
    return b.localeCompare(a);
}

console.log(musicians.sort(musiciansDown));


// length (nach Zeichenanzahl sortieren)
const musicians: string[] = ["Doja Cat", "Aqua Stone Throne", "Nils Frahm", "Ruger Hauer", "The Wanton Bishops"];
console.log(musicians);

console.log(musicians.sort((a: string, b: string) => a.length - b.length));
console.log(musicians.sort((a: string, b: string) => b.length - a.length));
console.log(musicians.sort());


const DosGamesChildhood: string[] = ["Duke Nukem", "Cosmo's Cosmic Adventure", "Commander Keen", "Doom", "Wolfenstein", "Megarace", "California Games" ];
console.log(DosGamesChildhood.includes("Doom"));
//true
console.log(DosGamesChildhood.includes("Jill of the Jungle"));
// false
console.log(DosGamesChildhood.slice(2));
//['Commander Keen', 'Doom', 'Wolfenstein', 'Megarace', 'California Games']
console.log(DosGamesChildhood.slice(2, 3));
// ['Commander Keen']


