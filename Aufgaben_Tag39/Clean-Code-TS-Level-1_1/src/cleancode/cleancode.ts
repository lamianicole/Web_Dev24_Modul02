const inputText = document.querySelector ('#inputText') as HTMLInputElement;
const countCapLettersBtn = document.querySelector ('#countCapLettersBtn') as HTMLButtonElement;
const countSpacesBtn = document.querySelector ('#countSpacesBtn') as HTMLButtonElement;
const countVowelsBtn = document.querySelector ('#countVowelsBtn') as HTMLButtonElement;
const output = document.querySelector ('#output');

console.log(inputText);
console.log(countCapLettersBtn);
console.log(countSpacesBtn);
console.log(countVowelsBtn);
console.log(output);

// function count capital letters
const getCapLetters = (): number => {
    const inputTextUser = inputText.value;
    let count = 0;
    for (let i = 0; i < inputTextUser.length; i++) {
        const charBucket = inputTextUser[i];
        if (charBucket >= 'A' && charBucket <= 'Z') {
            count++;
        }
    }
    return count;
}
// EventListener button capital letters
// countCapLettersBtn.addEventListener('click', getCapLetters);
countCapLettersBtn.addEventListener('click', () => {
    const count = getCapLetters();
    output.textContent = `Number of capital letters: ${count}`;
});


// function count vowels
const getVowels = (): number => {
    const inputTextUser = inputText.value
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < inputTextUser.length; i++) {
        const charBucket = inputTextUser[i];
        if (vowels.includes(charBucket)) {
            count++;
        }
    }
    return count;
};

// EventListener button count vowels
countVowelsBtn.addEventListener('click', () => {
    const count = getVowels();
    output.textContent = `Number of vowels: ${count}`;
});


// function count spaces
const getSpaces = (): number => {
    const inputTextUser = inputText.value;
    let count = 0;
    for (let i = 0; i < inputTextUser.length; i++) {
        const charBucket = inputTextUser[i];
        if (charBucket === "") {
            count++;
        }
    }
    return count;
}

// wollte hiermit Fehlermeldung vermeiden ("output" ist möglicherweise null)
// if (output) {
//     output.textContent = `Number of spaces: ${count}`;
// }

// EventListener button count spaces
countSpacesBtn.addEventListener('click', () => {
    const count = getSpaces();
    output.textContent = `Number of spaces: ${count}`;
});


// Übungszwecke
// const getCapLetters = (): number => {
//     for (let i = 0; i < inputTextUser.length; i++){
//         const charBucket = inputTextUser[i];
//         console.log(charBucket);
//         if (charBucket >= "A"){
//             console.log("Ich hab was gefunden");
//         } 
//     } 
// }

// die Runde Klammer brauch ich in dieser Callbackfunction nicht, weil ich die Funktion bereits oben geschrieben habe
// countCapLettersBtn.addEventListener('click', getCapLetters)



// Das ist eine Variation meiner ursprünglichen Überlegung, scheiterte an der Umsetzung:

// function countUpperCaseLetters(){
//     const textInputFieldValue = textInputField.value;
//     let count = 0;

//     const meinArr = Array.from(textInputFieldValue)
//     console.log(meinArr);

//     meinArr.filter((char: string) => {
//       if ((char >= "A" && char <= "Z")  char === "Ä"  char === "Ö" || char === "Ü") {
//         count++
//       }
//     })
//     console.log(count);
//   }