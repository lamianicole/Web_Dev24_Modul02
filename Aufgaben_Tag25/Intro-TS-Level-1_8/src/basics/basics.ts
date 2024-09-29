let x: number = 20;
console.log(x);
let y: number = 30;
console.log(y);
// bezeichnung x und y frei gewählt, beide werte sind schon vergeben, also nur in der console ausgeben lassen

console.log(x + y);
// 50
console.log(x - y);
// -10
console.log(y - x);
// 10
console.log(x * y);
// 600
console.log(x / y);
// 0.6666666666666666

let z: number = 10;
console.log(x * y / z);
// 60
let resultOne: number = 60;
console.log(resultOne);
let a: number = 15;
console.log(a);
let b: number = 9;
console.log(b);
console.log(a % b);
// 6. Modulo-Operator gibt Rest aus von 9.6
let c: number = 20;
console.log(c);

console.log((a + b) * c);
// ergibt 480. Punkt- vor Strichrechnung...
// let resultTwo: number = 480;
// console.log(resultTwo);
let resultTwo = (a + b) * c;
// so einmal Codezeile gespart
console.log(resultTwo);
// ergibt 480
console.log(++a);
console.log(--b);

let resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);
// 60. Hier Modulo-Operator




















