// Aufgabe Array-TS-Sort-Level-1_1 (sort)
// In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// Sortiere die Programmiersprachen alphabetisch.

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

// Deklariere die Funktion sortAlphabetically.
// Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
console.log(languages.sort());
// geht eigentlich auch so, weil es per default alphabetisch aufsteigend ist

function sortAlphabetically(){
    (console.log(languages.sort()));
};

sortAlphabetically();

// neues Array: europeanCountries
let europeanCountries: string[] = [
    "France",
    "Germany",
    "Sweden",
    "Great Britain",
    "Czech Republic",
    "Switzerland"
];
console.log(europeanCountries);

function sortAlphabetically(){
    (console.log(europeanCountries.sort()));
};

sortAlphabetically();
// ergibt: (6) ['Czech Republic', 'France', 'Germany', 'Great Britain', 'Sweden', 'Switzerland']


// Array-TS-Sort-Level-1_2 (sort + reverse)
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
console.log(codingLanguages);

function sortDescending(){
        (console.log(codingLanguages.sort()));
    };

sortDescending();
// ergibt: (12) ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript'] ist also alphabetisch aufsteigend, wollen wir nicht.

// Versuch mit arrow function:
const sortDescending = (a: string, b: string) => {
    return b.localeCompare(a);
}

console.log(codingLanguages.sort(sortDescending));
// (12) ['TypeScript', 'Swift', 'Ruby', 'Python', 'PHP', 'JavaScript', 'Java', 'Go', 'CSS', 'C++', 'C#', 'C'] ergibt also umgedrehte Reihenfolge


// Rufe die Funktion auch für europeanCountries auf
let europeanCountries: string[] = [
        "France",
        "Germany",
        "Sweden",
        "Great Britain",
        "Czech Republic",
        "Switzerland"
    ];
    console.log(europeanCountries);

const sortDescending = (a: string, b: string) => {
        return b.localeCompare(a);
    }

console.log(europeanCountries.sort(sortDescending));
// ergibt umgedrehte Reihenfolge: (6) ['Switzerland', 'Sweden', 'Great Britain', 'Germany', 'France', 'Czech Republic']


// Aufgabe: Array-TS-Sort-Level-1_3 (sort)

// Sortiere die Zahlen aus dem Array im Code-Snippet aufsteigend.
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1);

console.log(numArray1.sort((a: number, b: number) => a - b));
// ergibt aufsteigende Reihenfolge: (12) [2, 3, 10, 22, 24, 36, 54, 68, 70, 88, 98, 99]

console.log(numArray1.sort((a: number, b: number) => b - a));
// ergibt absteigende Reihenfolge: (12) [99, 98, 88, 70, 68, 54, 36, 24, 22, 10, 3, 2]


// Aufgabe Array-TS-Sort-Level-2_2 (sort)
let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray);
console.log(numArray.sort((a: number, b: number) => a - b));
// ergibt aufsteigende Reihenfolge: (8) [36, 62, 88, 98, 99, 122, 324, 1000]









