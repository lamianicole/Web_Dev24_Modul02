import Animal from "./classes/Animal";
import Person from "./classes/Person";
import IceCreamFlavor from "./classes/IceCreamFlavor";
import Car from "./classes/Car";
import Driver from "./classes/Driver";
import CarTypeTwo from "./classes/CarTypeTwo";
import Customer from ".classes/Customer";

// Level 1_12
// meine Eissorten:
const vanilla = new IceCreamFlavor("vanilla", 2, true, "super smooth");
console.log(vanilla);

const whiteChocolate = new IceCreamFlavor("white chocolate", 2, true, "limited edition");
console.log(whiteChocolate);

const watermelon = new IceCreamFlavor("watermelon", 3, false);
console.log(watermelon);

const pistacchioEspresso = new IceCreamFlavor("pistacchio espresso", 3, true);
console.log(pistacchioEspresso);


// Level 1_12
// Methode 1 aufrufen
watermelon.getTotalPrice(3);
whiteChocolate.getTotalPrice(2);

// Methode 2 aufrufen
pistacchioEspresso.printInfo();
vanilla.printInfo();

// Methode 3 aufrufen
whiteChocolate.getLengthOfDescription();  
watermelon.getLengthOfDescription(); 

// Level 1_12 Bonus fehlt


// Level 1_13
console.log(Car);

// Level 2_3
const randonCustomerWoman = new Customer ("Anne", "anne@mail.com", "anne street","12123", "anne town");
console.log(randonCustomerWoman);

const randomCustomerMan = new Customer("Joe", "joe@mail.com", "joe street", "12123", "joe town") 
console.log(randomCustomerMan);

