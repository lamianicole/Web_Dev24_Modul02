// Aufgabe: Level 1_1

// function intro1(): void {
// 	console.log('Hello Function')
// }

// intro1();


// hier Schreibweise Arrow function
// const intro1 = () => {
// 	console.log('Hello Function')
// }

// intro1();

// void = leer, hat keinen return
// Wenn die Arrow-Function nur EIN Statement hat, können die Klammern und das return-Keyword entfernt werden. Dies macht Arrow-Functions in JavaScript besonders kompakt und nützlich:
// const add = (a: number, b: number) => a + b


// Aufgabe: Level 1_2

// const sayHello = document.querySelector('#sayHello') as HTMLDivElement;
// console.log(sayHello);

// function welcoming(): void {
//     sayHello.textContent = "Hello";
// }

// welcoming();


// arrow function
// const welcoming = () => {
//     sayHello.textContent = "Hello"; 
// }  

// welcoming();


// function sum (a: number, b: number) {
//     return a + b;
// }

// console.log(sum(2, 3));


// arrow function
// const sum = (a: number, b: number) => {
//     return a + b;
// }

// console.log(sum(2, 3));


// function multiply (a: number, b: number) {
//     return a * b;
// }

// console.log(multiply(2, 2));
// window.alert(multiply(2, 2));


// const multiply = (a: number, b: number) => {
//     return a * b;
// }

// console.log(multiply(2, 2));
// window.alert(multiply(2, 2));


// type Tmember39 = {
//     firstName: string;
//     lastName: string;
//     age: number;
// };

// function loginClubMember(member: Tmember39): void {
//     const memberProfile = `  
//     Memberdata:
//     firstName: ${member.firstName}
//     lastName: ${member.lastName}
//     age: ${member.age}`
//     console.log(memberProfile);
// }
// const person1: Tmember39 = {
//     firstName: "Lamia",
//     lastName: "Rizk",
//     age: 40
// }
// loginClubMember(person1);

// arrow function
// const loginClubMemberArrow = (member: Tmember39): void => {
//     const memberProfile = `  
//     Memberdata:
//     firstName: ${member.firstName}
//     lastName: ${member.lastName}
//     age: ${member.age}`
//     console.log(memberProfile);
// }
// const person2: Tmember39 = {
//     firstName: "Lamia",
//     lastName: "Rizk",
//     age: 40
// }
// loginClubMemberArrow(person2);


// Aufgabe This-TS-Level-1_2
// wir brauchen hier return, weil wir es im HTML ausgeben wollen!

// const person = {
//     vorname: 'Anton',
//     nachname: 'Fish',
//     alter: 34,
//     familienstand: 'ledig',
//     groesse: 1.78,
//     zeigeProfil: function () {
//         return `
//         <p>Vorname: ${this.vorname}</p>
//         <p>Nachname: ${this.nachname}</p>
//         <p>Alter: ${this.alter} Jahre</p>
//         <p>Familienstand: ${this.familienstand}</p>
//         <p>Größe ${this.groesse} cm</p>`;
//     }
// };

// document.getElementById("person").innerHTML = person.zeigeProfil();


// const personZwei = {
//     vorname: 'Max',
//     nachname: 'Mustermann',
//     alter: 45,
//     familienstand: 'ledig',
//     groesse: 1.82,
//     zeigeProfilZwei: () => {
//         return `
//         <p>Vorname: ${personZwei.vorname}</p>
//         <p>Nachname: ${personZwei.nachname}</p>
//         <p>Alter: ${personZwei.alter} Jahre</p>
//         <p>Familienstand: ${personZwei.familienstand}</p>
//         <p>Größe ${personZwei.groesse} cm</p>`;
//     }
// };

// document.getElementById("personZwei").innerHTML = personZwei.zeigeProfilZwei();



// Aufgabe Functions-TS-Level-1_6
// Leg einen Typ Monster an. Alle Eigenschaften sind Pflicht
type TMonster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number
    };

// Erstelle eine Funktion createMonster, die ein Monster erzeugt und zurückgibt
// name und type müssen immer an die Funktion übergeben werden
// Werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden: health = 100, strength = 50, speed = 25
const createMonster = (name: string, type: string, health?: number, strength?: number, speed?: number): TMonster => {
        const Monster2: TMonster = {
        name: name,
        type: type,
        health: health ?? 100,
        strength: strength ?? 50,
        speed: speed ?? 25,
        };
        return Monster2;
    };

// Leg mit Hilfe der Funktion mehrere Monster an, gib dabei 2-5 Parameter an
console.log(createMonster("Hydra", "greekMyth"));
console.log(createMonster("Fenrir", "nordicMyth", 180));
console.log(createMonster("Huwawa", "gilgameshEpic", 90, 54));
console.log(createMonster("Frankenhooker", "blackComedyHorror", 90, 450, 700));


Aufgabe 







