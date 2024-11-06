import { format } from "date-fns";

// Stelle das aktuelle Datum in folgenden beiden Formen dar:
// tt-mm-jjjj und tt/mm/jjjj (Tag, Monat, Jahr)

const currentDate = new Date();
const dateMinus = format(currentDate, "dd-MM-yyyy");

// console.log(dateMinus);

const showDateMinus = document.createElement("p") as HTMLHeadElement;
showDateMinus.textContent = dateMinus;
document.body.appendChild(showDateMinus)


const dateSlash = format(currentDate, "dd/MM/yyyy")
console.log(dateMinus);
console.log(dateSlash);

const showDateSlash = document.createElement("p") as HTMLHeadElement;
showDateSlash.textContent = dateSlash;
document.body.appendChild(showDateSlash);


// Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
    // lokal
    // UTC
const localTime = document.querySelector('#localTime') as HTMLParagraphElement;
const utcTime = document.querySelector('#utcTime') as HTMLParagraphElement;
console.log(localTime);
console.log(utcTime);

localTime.innerHTML = `${format(currentDate, 'hh:mm')}`
utcTime.innerHTML = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`
