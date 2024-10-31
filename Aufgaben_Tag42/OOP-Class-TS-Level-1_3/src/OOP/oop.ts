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
// alle Eissorten in einem Array speichern:
const iceCreamSorten


// Level 1_13
console.log(Car);

// Level 2_3
const randonCustomerWoman = new Customer ("Anne", "anne@mail.com", "anne street","12123", "anne town");
console.log(randonCustomerWoman);

const randomCustomerMan = new Customer("Joe", "joe@mail.com", "joe street", "12123", "joe town") 
console.log(randomCustomerMan);


// Bonusteil:
const section = document.createElement("section") as HTMLDivElement

iceCreamSorten.forEach((ice: IceCreamFlavor) => {
    console.log(ice);
    const divElement =
    
})

// bei & Price brauchen wir toString, denn TextContent erwartet string und den price hatten wir als number angegeben, deshalb muss es angepasst werden mit toString
// Dafür wurde vorher die Variable scoopsAnzahl gebildet, weil wir toString nicht einfach an eine number anhängen können, Variable ist sozusagen Tüte, darin wird number getan

// divElement = Eltern: holen kind ab (appendChild), welches Kind?: steht in Klammern dahinter: 
