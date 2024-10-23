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


// Aufgabe Level 2_2
const inputFirstName = document.querySelector("#inputFirstName") as HTMLInputElement;
const inputLastName = document.querySelector("#inputLastName") as HTMLInputElement;
const inputEmail = document.querySelector("#inputEmail") as HTMLInputElement;
const inputPhone = document.querySelector("#inputPhone") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement; 
const output = document.querySelector("#output") as HTMLElement; 

// Lege einen Typ NewCustomer an
type TNewCustomer = {
    firstName: string,
    lastName: string,
    email?: string,
    phone?: string
}

// Leg 2 Funktionen an, die jeweils das gleiche Ergebnis liefern, einen Begrüßungstext als String zurückgeben
// greetNewUser1 mit einem Parameter vom Typ NewCustomer
// greetNewUser2 mit 4 Parametern (firstName, lastName, email, phone)
function greetNewUser1(customer: TNewCustomer) {
    if (customer.email && customer.phone) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email} and ${customer.phone}`;
    } else if (customer.email) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email}`;
    } else if (customer.phone) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.phone}`;
    } else {
        return `Hello ${customer.firstName} ${customer.lastName}. We will not contact you`;
    }
}

function greetNewUser2(
    firstName: string,
    lastName: string,
    email?: string,
    phone?: string
): string {
    if (email && phone) {
        return `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`;
    } else if (email) {
        return `Hello ${firstName} ${lastName}. We will contact you via ${email}`;
    } else if (phone) {
        return `Hello ${firstName} ${lastName}. We will contact you via ${phone}`;
    } else {
        return `Hello ${firstName} ${lastName}. We will not contact you`;
    }
}
// mit Hilfe
button.addEventListener('click', () => {
    const firstName = document.querySelector('#firstName') as HTMLInputElement;
    const lastName = document.querySelector('#lastName') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const phone = document.querySelector('#phone') as HTMLInputElement;
    const output = document.querySelector('#output') as HTMLElement;
    
    const newCustomer: TNewCustomer = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value
    }

    console.log(greetNewUser1(newCustomer));
    output.innerHTML = greetNewUser2(firstName.value, lastName.value, email.value, phone.value);
})
