const bucketItem1 = "London";
const bucketItem2 = "Oslo";
const bucketItem3 = "Montreal";

const bucketList: string[] = ["London", "Oslo", "Montreal"];
console.log(bucketList);


const luckynum1 = 1;
const luckynum2 = 2;
const luckynum3 = 3;

const luckyNumbers: number[] = [1, 2, 3];
console.log(luckyNumbers);


const person1 = "Sarah";
const person2 = "Nicolas";
const person3 = "John";

const favoritePeople: string[] = ["Sarah", "Nicolas", "John"];
console.log(favoritePeople);


// Aufgabe 1_2
console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);


// Aufgabe 1_3 (length)
console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);


// Aufgabe 1_4 (push)
const rugbyPositions1 = "looseheadprop";
const rugbyPositions2 = "hooker";
const rugbyPositions3 = "tightheadprop";
const rugbyPositions4 = "numberfourlock";
const rugbyPositions5 = "numberfivelock";

const rugbyPositions: string[] = ["looseheadprop", "hooker", "tightheadprop", "numberfourlock", "numberfivelock"];
console.log(rugbyPositions);
console.log(rugbyPositions.length);

rugbyPositions.push("flanker");
console.log(rugbyPositions);
console.log(rugbyPositions.length);

rugbyPositions.push("numbereight", "scrumhalf", "flyhalf");
console.log(rugbyPositions);
console.log(rugbyPositions.length);


// Aufgabe 1_5 (pop)
const lastValue: string = rugbyPositions.pop();
console.log(lastValue);
console.log(rugbyPositions);


// Aufgabe 1_6 (shift)
const firstPerson: string = favoritePeople.shift();
console.log(firstPerson);
console.log(favoritePeople);

const firstPosition: string = rugbyPositions.shift();
console.log(firstPosition);
console.log(rugbyPositions);

const firstNumber: number = luckyNumbers.shift();
console.log(firstNumber);
console.log(luckyNumbers);

const firstBucketItem: string = bucketList.shift();
console.log(firstBucketItem);
console.log(bucketList);


// Aufgabe 1_7 (unshift)
const musicStyles: string[] = ["jazz", "pop", "folk"];
console.log(musicStyles);
console.log(musicStyles.length);
musicStyles.unshift("rock", "urban");
console.log(musicStyles);
console.log(musicStyles.length);


// Aufgabe 1_8 (slice)
// Lass dir dein Array "lieblingsreiseziele" einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche Array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das ursprüngliche Array beeinflusst.
const dest1 = "Netherlands";
const dest2 = "Spain";
const dest3 = "Lebanon";
const dest4 = "Finland";
const favDestinations: string[] = ["Netherlands", "Spain", "Lebanon", "Finland"];
console.log(favDestinations);
console.log(favDestinations.length);
console.log(favDestinations.slice(1, 3));
console.log(favDestinations.length);


// Aufgabe 1_9 (push/pop/shift/unshift)
const numListItem1: number = 23;
const numListItem2: number = 54;
const numListItem3: number = 75;

const numList: number[] = [23, 54, 75];
console.log(numList);
console.log(numList.length);
numList.push(80, 94, 123, 145, 176);
console.log(numList);
console.log(numList.length);
const lastTwoNumbers: number = numList.pop();
console.log(numList);
// entfernt nur den letzten Wert, also Vorgang noch mal durchführen:
const lastNumber: number = numList.pop();
console.log(numList);
// jetzt sind die 2 letzten Nummern weg, aber war der Weg richtig? Kommt mir komisch vor, wäre zu mühselig, wenn mehr als 2...
console.log(numList.length);
console.log(numList.shift);









































