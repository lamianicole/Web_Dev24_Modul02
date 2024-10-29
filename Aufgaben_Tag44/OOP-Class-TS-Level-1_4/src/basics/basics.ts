import Alien from "../classes/Alien";
import Song from "../classes/Song";
import SongWithUnknownArtist from "../classes/SongWithUnknownArtist";


// Aufgabe 1-4
const alienOne = new Alien('Hoopsie', 'M-34', 'Andromeda', 'purple');
const alienTwo = new Alien('Poopsie', 'Ceres', 'Asteroid Belt', 'black');
const alienThree = new Alien('Loopsie', 'Mars', 'Milky Way', 'violet');

console.log(alienOne, alienTwo, alienThree);


// Aufgabe 1-5
const songOne = new Song('Ein Anruf entfernt', 'Zartmann');
const songTwo = new Song('Diamonds on the inside', 'Ben Harper');
const songThree = new Song('In der Stadt', 'Veedel Kaztro');

const songFour = new SongWithUnknownArtist('DanceDanceDance');
songFour.setArtist('DanceProductions');
songFour._durationInSeconds = 500;
console.log(songFour);


// Aufgabe 1_10
import Coffee, { Type } from "../classes/Coffee";
import Tea, { Flavor } from "../classes/Tea";

const espresso = new Coffee('Espresso Dpuble Shot', 4.00, Type.Espresso);
const latte = new Coffee('Caffè Latte Spicy Pumpkin Flavor', 4.50, Type.Latte);
const cappuccino = new Coffee('Cappuccino classic', 4.00, Type.Cappuccino);
const americano = new Coffee('Americano seasonal blend', 2.50, Type.Americano);

console.log(cappuccino, latte, espresso, americano);

const greenTea = new Tea('Detoxify', 3.50, Flavor.Green);
const blackTea = new Tea('Oostfreesentee', 2.50, Flavor.Black);
const chaiTea = new Tea('Chai High Tea', 3.00, Flavor.Chai);
const peppermintTea = new Tea('PepperminTea', 2.50, Flavor.Peppermint);

console.log(greenTea, blackTea, chaiTea, peppermintTea);