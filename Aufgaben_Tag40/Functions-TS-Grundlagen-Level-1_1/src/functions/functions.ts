// Aufgabe: Level 1_1

// function intro1(): void {
// 	console.log('Hello Function')
// }

// intro1();


// hier Schreibweise Arrow function
const intro1 = () => {
	console.log('Hello Function')
}

intro1();

// void = leer, hat keinen return
// Wenn die Arrow-Function nur EIN Statement hat, können die Klammern und das return-Keyword entfernt werden. Dies macht Arrow-Functions in JavaScript besonders kompakt und nützlich:
// const add = (a: number, b: number) => a + b


// Aufgabe: Level 1_2

const sayHello = document.querySelector('#sayHello') as HTMLDivElement;
console.log(sayHello);

// function welcoming(): void {
//     sayHello.textContent = "Hello";
// }

// welcoming();


// arrow function
const welcoming = () => {
    sayHello.textContent = "Hello"; 
}  

welcoming();


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


type Tmember39 = {
    firstName: string;
    lastName: string;
    age: number;
};

function loginClubMember(member: Tmember39): void {
    const memberProfile = `  
    Memberdata:
    firstName: ${member.firstName}
    lastName: ${member.lastName}
    age: ${member.age}`
    console.log(memberProfile);
}
const person1: Tmember39 = {
    firstName: "Lamia",
    lastName: "Rizk",
    age: 40
}
loginClubMember(person1);

// arrow function
const loginClubMemberArrow = (member: Tmember39): void => {
    const memberProfile = `  
    Memberdata:
    firstName: ${member.firstName}
    lastName: ${member.lastName}
    age: ${member.age}`
    console.log(memberProfile);
}
const person2: Tmember39 = {
    firstName: "Lamia",
    lastName: "Rizk",
    age: 40
}
loginClubMemberArrow(person2);