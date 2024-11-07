const homeworkOne: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
            const success: boolean = true
            if (success) {
                resolve("Exercise 1 done")
            } else {
                reject("Exercise not done")
            }
        }, 2000)
    });

const homeworkTwo: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
            const success: boolean = true
            if (success) {
                resolve("Exercise 2 done")
            } else {
                reject("Exercise not done")
            }
        }, 3000)
    });

const homeworkThree: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
            const success: boolean = true
            if (success) {
                resolve("Exercise 3 done")
            } else {
                reject("Exercise not done")
            }
        }, 4000)
    });

const output = document.querySelector('#output') as HTMLParagraphElement;

// homeworkOne.then((response) => {
//     output.innerText = response;
// }).then(() => {
//     homeworkTwo.then((response) => {
//         output.innerText = response;
//     }).then(() => {
//         homeworkThree.then((response) => {
//             output.innerText = response;
//         }).catch((error) => console.error(error))
//     }).catch((error) => console.error(error))
// }).catch((error) => console.error(error))

// Zeile 36-46: So wird der Output-Text lediglich ersetzt, nicht ergänzt


homeworkOne
.then((response) => {
    output.innerText = `${response}`;
    return homeworkTwo;
})
.then((response) => {
    output.innerText += ` ${response}`;
    return homeworkThree;
})
.then((response) => {
    output.innerText += ` ${response}`;
})
.catch((error) => console.error("Homework not done"));

// So werden die Ausgabe-Texte ergänzt (mit Leerzeichen dazwischen)