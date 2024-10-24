import IceCreamFlavor from "./IceCreamFlavor";
import SchoolClass from './SchoolClass';
import Person from './Person';
import Car from './Car';
import Driver from './Driver';

const vanilla = new IceCreamFlavor("vanilla", 2, true, "super smooth");
console.log(vanilla);

const whiteChocolate = new IceCreamFlavor("white chocolate", 2, true, "limited edition");
console.log(whiteChocolate);

const watermelon = new IceCreamFlavor("watermelon", 3, false);
console.log(watermelon);

const pistacchioEspresso = new IceCreamFlavor("pistacchio espresso", 3, true);
console.log(pistacchioEspresso);

const allIceCreamFlavors: IceCreamFlavor[] = [vanilla, whiteChocolate, watermelon, pistacchioEspresso];
console.log(allIceCreamFlavors);

// alle Eissorten ausgeben (mit Array-Methode forEach) mit isPopular = true
allIceCreamFlavors.forEach((item: IceCreamFlavor) => {
    if(item._isPopular === true){
    console.log(item._name);
    }
})


// zu Level 1_2
const schoolClassJr = new SchoolClass("2a", 1234, 2036);
console.log(schoolClassJr);

const schoolClassMid = new SchoolClass("5b", 1256, 2031)
console.log(schoolClassMid);

const schoolClassSr = new SchoolClass("10c", 1210, 2027)

schoolClassJr._name = "2b";
console.log(schoolClassJr);

schoolClassMid._name = "5e";
console.log(schoolClassMid);


// zu Level 2_1
const pupilsScholarship = new Person(125, "Summer", "Roberts", "02/04/98");
const pupilsExchange = new Person(218, "Ryan", "Atwood", "01/02/89");
const pupilsBoarding = new Person(429, "Marissa", "Cooper", "03/09/91");

const schoolClassQual = new SchoolClass("12a", 1283, 2026, [pupilsScholarship, pupilsExchange]);
console.log(schoolClassMid);

// mit push-Methode hinzufügen
schoolClassMid._pupils?.push(pupilsScholarship, pupilsExchange, pupilsBoarding);
console.log(schoolClassMid);


// zu Level 2_2
const carCity = new Car("Fiat", 2025, "160 km/h");
const carChamp = new Car("Bugatti", 2016, "440 km/h");
const carTimeless = new Car("Chevrolet", 1969, "150 km/h");


const driverTopspeed = new Driver("Paula", "Pauli", 42, carChamp);
const driverCruiser = new Driver("Paule", "Pauli", 40, carTimeless);
const driverAdventure = new Driver("Paulo", "Pauli", 39, carCity);


console.log(driverTopspeed);
console.log(driverCruiser);
console.log(driverAdventure);
