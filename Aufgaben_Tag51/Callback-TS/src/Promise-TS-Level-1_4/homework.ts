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


Promise.all([homeworkOne, homeworkTwo, homeworkThree])
.then((response: [string, string, string]) => {
    response.forEach((arr) => {
        console.log(arr);
    })
    output.innerHTML += `<p>${response}</p>`;
})
.catch((error) => console.error(error))
.finally(() => {
    output.innerHTML += "Homework done"
})

// Die Zeiten von setTimeout müssen nicht geändert werden, da Promise.all sich nach der langsamsten richtet und dann parallel agiert
