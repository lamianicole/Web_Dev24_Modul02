// Lege eine Variable weekdayAsNumber vom Typ Number an
// Lege eine Variable weekdayAsString vom Typ String anlet weekdayAsNumber: number;
let weekdayAsNumber: number;
let weekdayAsString: string; 

// Rufe window.prompt mit dem Text “Please insert a number from 1 to 7” auf
console.log(window.prompt("Please insert a number from 1 to 7"));

// Wandle den im Prompt eingegebenen Wert in eine Number um und schreibe diese Zahl in die Variable weekdayAsNumber
console.log(Number(window.prompt("Please insert a number from 1 to 7")));

switch (weekdayAsNumber) {
    case 1:
    weekdayAsString = "Montag";
    console.log(weekdayAsString);
    break;
    case 2:
    weekdayAsString = "Dienstag";
    console.log(weekdayAsString);
    break;
    case 3:
    weekdayAsString = "Mittwoch";
    console.log(weekdayAsString);
    break;
    case 4:
    weekdayAsString = "Donnerstag";
    console.log(weekdayAsString);
    break;
    case 5:
    weekdayAsString = "Freitag";
    console.log(weekdayAsString);
    break;
    case 6:
    weekdayAsString = "Samstag";
    console.log(weekdayAsString);
    break;
    case 7:
    weekdayAsString = "Sonntag";
    console.log(weekdayAsString);
    break;
}

console.log(weekdayAsString);


