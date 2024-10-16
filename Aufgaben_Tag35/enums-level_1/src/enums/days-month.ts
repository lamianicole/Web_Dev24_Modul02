// Aufgabe enums Level 1_1
import { Weekday } from "./enums";
console.log(Weekday);

import { Month } from "./enums";
console.log(Month);


// mit for..in-Schleife, die lässt sich auch für Enums nutzen
for(let key in Weekday) {
    console.log(key)
}

for(let key in Month) {
    console.log(key)
}