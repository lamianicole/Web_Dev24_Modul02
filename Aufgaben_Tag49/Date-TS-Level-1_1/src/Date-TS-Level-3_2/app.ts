import { format, differenceInYears, differenceInHours, differenceInSeconds } from "date-fns";
// Lege zwei Datumsvariablen an: 01.01.1970 und jetzt

const currentDate = new Date();
const pastDate = new Date("1970-01-01");

const showPastYears = differenceInYears(currentDate, pastDate);
const showPastHours = differenceInHours(currentDate, pastDate);
const showPastSeconds = differenceInSeconds(currentDate, pastDate);

console.log(`time in years: `, showPastYears);
console.log(`time in hours: `, showPastHours);
console.log(`time in seconds: `, showPastSeconds);


// Variable Geburtstag
const myBirthday = new Date("1983-12-17");

const ageNow = differenceInYears(currentDate, myBirthday);

const ageIn2007 = differenceInYears(new Date("2007-04-07"), myBirthday);

console.log(`I am ${ageNow} years old`);
console.log(`During 2007, on April the 7th I was ${ageIn2007} years old`);


// "20.12.1979 12:40:00"
// "20.12.1979 12:40"
// "20.12.79"
// "20. Dezember 1979"
// "12:40"
// "Donnerstag"
// "Dezember"
// "20 des Dezember im Jahre des Herrn 1979"

const formatmyBirthdayType1 = format(myBirthday, "dd.MM.yyyy kk:mm:ss");
const formatmyBirthdayType2 = format(myBirthday, "dd.MM.yyyy kk:mm");
const formatmyBirthdayType3 = format(myBirthday, "dd.MM.yyyy");
const formatmyBirthdayType4 = format(myBirthday, "dd.MMMM.yyyy");
const formatmyBirthdayType5 = format(myBirthday, "kk:mm");
const formatmyBirthdayType6 = format(myBirthday, "EEEE");
const formatmyBirthdayType7 = format(myBirthday, "LLLL");
const formatmyBirthdayType8 = format(myBirthday, "dd 'of' MMMM 'in year' yyyy");

console.log(formatmyBirthdayType1);
console.log(formatmyBirthdayType2);
console.log(formatmyBirthdayType3);
console.log(formatmyBirthdayType4);
console.log(formatmyBirthdayType5);
console.log(formatmyBirthdayType6);
console.log(formatmyBirthdayType7);
console.log(formatmyBirthdayType8);
