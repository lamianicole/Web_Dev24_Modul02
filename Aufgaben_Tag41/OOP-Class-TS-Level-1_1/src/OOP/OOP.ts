import IceCreamFlavor from "./IceCreamFlavor";
import SchoolClass from './SchoolClass';

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




