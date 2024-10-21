const inputText = document.querySelector ('#inputText') as HTMLInputElement;
const inputNumber = document.querySelector ('#inputNumber') as HTMLInputElement;
const encodeBtn = document.querySelector ('#encodeBtn') as HTMLButtonElement;
const decodeBtn = document.querySelector ('#decodeBtn') as HTMLButtonElement;
const output = document.querySelector ('#output') as HTMLElement;

// neues Array für das Alphabet erstellen
const alphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

// Neuer Lösungsversuch mit Copilot mit den Methoden push und shift bzw. pop und unshift, hätte ich von allein so nicht schreiben können, leider ...

// function: Caesar-Verschlüsselung
const caesarEncrypt = (input: string, key: number): string => {
    // erstellt leere Zeichenkette „result“, die das verschlüsselte Ergebnis speichert
    let result = "";
    input = input.toLowerCase();
    // durchläuft jedes Zeichen des Eingabetextes
    for (let char of input) {
        // prüft, ob jedes Zeichen im Alphabet-Array enthalten ist
        if (alphabetArray.includes(char)) {
            // Kopiert das Alphabet-Array in ein neues Array
            let shiftedText = [...alphabetArray];
            // Verschiebt das Alphabet um die Anzahl key
            for (let i = 0; i < key; i++) {
                shiftedText.push(shiftedText.shift() as string);
            }
            // findet den Index des Zeichens im Alphabet
            let index = alphabetArray.indexOf(char);
            // fügt das verschlüsselte Zeichen zur Ergebniszeichenkette hinzu
            result += shiftedText[index];
            // fügt Nicht-Buchstaben unverändert zur Ergebniszeichenkette hinzu
        } else {
            result += char;
        }
    }
    return result;
};

// function: Caesar-Entschlüsselung
const caesarDecrypt = (input: string, key: number): string => {
    let result = "";
    input = input.toLowerCase();
    [...alphabetArray];
    // Verschieben des Alphabets in die entgegengesetzte Richtung
    for (let char of input) {
        if (alphabetArray.includes(char)) {
            // Kopiert das Alphabet-Array in ein neues Array „shiftedText“
            let shiftedText = [...alphabetArray];
            for (let i = 0; i < key; i++) {
                shiftedText.unshift(shiftedText.pop() as string);
            }
            let index = alphabetArray.indexOf(char);
            result += shiftedText[index];
        } else {
            result += char;
        }
    }
    return result;
};

encodeBtn.addEventListener('click', () => {
    const text = inputText.value;
    const key = Number(inputNumber.value);
    output.textContent = `Encoded: ${caesarEncrypt(text, key)}`;
});

decodeBtn.addEventListener('click', () => {
    const text = inputText.value;
    const key = Number(inputNumber.value);
    output.textContent = `Decoded: ${caesarDecrypt(text, key)}`;
});





// voriger Ansatz, nicht weitergekommen:
// console.log(inputText);
// console.log(inputNumber);
// console.log(encodeBtn);
// console.log(decodeBtn);
// console.log(output);

// encodeBtn?.addEventListener('click', () =>{
//     let inputValue: string = inputText.value.toLowerCase();
//     let inputKey: number = Number(inputNumber.value);
//     let inputValueToArray = Array.from(inputValue);
//     console.log(inputValueToArray);
//     console.log(inputValue);
    // inputValue.map() Methode map nicht möglich, weil inputValue = string
//     inputValueToArray.map(() => {
//     })
// })

// decodeBtn?.addEventListener('click', () => {
//     console.log("test");
//     console.log(inputText.value);
//     console.log(inputNumber.value);
// })

// const charArray: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// console.log(charArray);















