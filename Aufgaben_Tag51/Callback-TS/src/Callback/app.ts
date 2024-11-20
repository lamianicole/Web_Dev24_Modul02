// Zeile 7: Map ist generics type

function processData(
    numbers: number[],
    callback1: (numbers: number[]) => number[],
    callback2: (numbers: number[]) => number[]
) : Map<number, string> {
    // return callback1(numbers): ich muss Variable abspreichern, weil ich damit weiterarbeite, s. nä. Zeile
    const sortedNumbers = callback1(numbers)
    const doubledNumbers = callback2(sortedNumbers)
    const map = new Map()
    numbers.forEach(())

    return doubledNumbers
}
// bin hier am Ende zum return verpflichtet

// const sortNumbers = (numbers: number[]) => numbers.sort((a, b) => b - a)
// gibt ein undefinded zurück. Wenn wir in arrow function in 1 Zeile bleiben, brauchen wir kein return, sieht man hier, 1 Zeile = keine geschweifte Klammern
// b - a, weil absteigend sortieren

const sortNumbers = (numbers: number[]) => {
    return numbers.sort((a, b) => b - a)
}
const multiplyBy2 = (numbers: number[]) => numbers.map((number: number) => number * 2)
// map ist die einzige Methode, die ein neues Array erstellt, forEach z.B. nicht. Deshalb brsuchen wir map

// Die Zahlen und die Anzahl der Zahlen ist frei gewählt, einfach ausgedacht.
// brauche hier nun 3 Argumente, also auch multiplyBy2 in der Klammer
console.log(processData([1, 4, 20,12,100], sortNumbers, multiplyBy2));

arrays[]

// Object erstellen
const meinObj = {
    name: "Joe",
    age: 20
}


// Map (nicht zu verwechseln mit map vom Array) => Es arbeitet mit Object
// set ist feste Methode, die immer mit Map zusammenarbeitet
// zuMap im Browser: links Zahl wie enum mit Index 0
const germaEnglishWoerterbuch = new Map<string, string>()
germaEnglishWoerterbuch.set("Tier", "Animal")
germaEnglishWoerterbuch.set("froh", "happy")
germaEnglishWoerterbuch.set("Montag", "Monday")
germaEnglishWoerterbuch.set("Montag", "Monday")
// Dopplungen werden ausgespart

console.log(germaEnglishWoerterbuch);

const newObj = Object.fromEntries(germaEnglishWoerterbuch)
// Entries: sind wie kleinere Objects in Objects

// normalerweise schreibt man in die Callback frunction nur 1 Parameter, hier weiß ich, dass ich zwei habe, also rein
germaEnglishWoerterbuch.forEach((value, kex) => {
    console.log(`${key} heißt übersetzt ${value}`);
    
})
