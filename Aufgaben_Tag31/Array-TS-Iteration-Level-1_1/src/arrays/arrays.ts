// Array-TS-Iteration-Level-1_1 (forEach)

const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];
console.log(getraenke);

// und sortiere das Array getraenke vorher alphabetisch.
console.log(getraenke.sort());

// jetzt noch mal const für Weiterverarbeitung
const sortedBeverages: string[] = [...getraenke].sort();

console.log(sortedBeverages);

// Zugriff aufs HTML, Zugriff auf mein li tag im HTML
const beverageList = document.querySelector('#beverageList') as HTMLElement;

// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und überlege, wie du die Elemente in deine index.html schreibst.
sortedBeverages.forEach((item) => {
    // abfrage ob beverageList vorhanden
    if (beverageList) {
      // mit innerHTML kann ich elemente im HTML erzeugen
      // += --> alter value + neuer value
    beverageList.innerHTML += `<li>${item}</li>`;
    }
})


// Aufgabe Array-TS-Iteration-Level-1_2(map)
const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const UpperDrinks = drinks.map((drink)=> {
    console.log(drink.toUpperCase());
    return drink.toUpperCase();
    
});

console.log(UpperDrinks);


const favDrinks = drinks.map((drink)=> {
    console.log("I like ".concat(drink));  
})

// array.map((elt) =>{})


// Array-TS-Iteration-Level-1_3
const array: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

// Jeder Wert aus dem Array (siehe Code-Snippet) soll mit 2 multipliziert und das Ergebnis sortiert werden
const numbers = array.map((num)=> {
    return num *2
});
console.log(numbers.sort((a, b) => a - b));


// Array-TS-Iteration-Level-1_4 (map)
const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

console.log(fahrenheit);

const fahrenheitCelsius = fahrenheit.map((temperature) => {
    const celsius: number = (temperature - 32) / 1.8;
    return celsius.toFixed(0);
});

console.log(fahrenheitCelsius);


// Array-TS-Iteration-Level-1_5 (map)
const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
console.log(checkNumber);


const testNumber: number[] = checkNumber.map((num: number) => {
    if (num % 3 === 0) {
        return num + 100;
    } else {
        return num;
    }
});
console.log(testNumber);


// Array-TS-Iteration-Level-1_6 (map oder forEach)
let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];



