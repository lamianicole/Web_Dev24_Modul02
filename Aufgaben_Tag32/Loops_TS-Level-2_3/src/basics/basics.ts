function receiveAmountVowels(input: string): number {
    // Array mit den Vokalen
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    // Variable, um die Anzahl der Vokale zu zählen
    let count = 0;

    // for-Schleife, um jeden Buchstaben im String zu durchlaufen
    for (let i = 0; i < input.length; i++) {
        // Bedingung, um zu prüfen, ob der aktuelle Buchstabe ein Vokal ist
        if (vowels.includes(input[i])) {
        count++;
        }
    }

    // Anzahl der Vokale zurückgeben
    return count;
}

// Funktion mit mehreren Strings testen
console.log(receiveAmountVowels("Lamia")); // ergibt: 3
console.log(receiveAmountVowels("Nicole")); // ergibt: 3
console.log(receiveAmountVowels("Jasper")); // ergibt: 2


// und so Schreibweise mit Arrow function:
const receiveAmountVowels = (input: string): number => {
    // Array mit den Vokalen
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    // Variable, um die Anzahl der Vokale zu zählen
    let count = 0;

    // for-Schleife, um jeden Buchstaben im String zu durchlaufen
    for (let i = 0; i < input.length; i++) {
        // Bedingung, um zu prüfen, ob der aktuelle Buchstabe ein Vokal ist
        if (vowels.includes(input[i])) {
        count++;
        }
    }

    // Anzahl der Vokale zurückgeben
    return count;
}

// Funktion mit mehreren Strings testen
console.log(receiveAmountVowels("Lamia")); // ergibt: 3
console.log(receiveAmountVowels("Nicole")); // ergibt: 3
console.log(receiveAmountVowels("Jasper")); // ergibt: 2