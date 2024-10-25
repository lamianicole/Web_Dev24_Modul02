import Animal from "./classes/Animal";
import Person from "./classes/Person";
import IceCreamFlavor from "./classes/IceCreamFlavor";

// meine Eissorten:
const vanilla = new IceCreamFlavor("vanilla", 2, true, "super smooth");
console.log(vanilla);

const whiteChocolate = new IceCreamFlavor("white chocolate", 2, true, "limited edition");
console.log(whiteChocolate);

const watermelon = new IceCreamFlavor("watermelon", 3, false);
console.log(watermelon);

const pistacchioEspresso = new IceCreamFlavor("pistacchio espresso", 3, true);
console.log(pistacchioEspresso);

// Methode 1 aufrufen
watermelon.getTotalPrice(3);
whiteChocolate.getTotalPrice(2);

// Methode 2 aufrufen
pistacchioEspresso.printInfo();
vanilla.printInfo();

// Methode 3 aufrufen
whiteChocolate.getLengthOfDescription();  
watermelon.getLengthOfDescription();  
