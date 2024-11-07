// - Erstelle ein Promise vom Typ number[]
// - Lass dir mit Math.random drei zufällige Werte zwischen 1 und 130 generieren
// - Ist einer der Werte größer als 100, rejecte das komplette Promise mit einem Fehlertext
// - Schreibe andernfalls die drei Werte in ein Array und resolve das Array

// - Hänge dich an das Promise
// - Es werden fünf then-Blöcke aneinandergehängt (Chaining)
// - Die Ergebnisse sollen jeweils erst auf die Konsole geloggt und dann weitergereicht werden
// - Im ersten then-Block soll auf jeden Wert 7 aufaddiert werden
// - Im zweiten then-Block soll jeder Wert mit 2 multipliziert werden
// - Im dritten then-Block soll von jedem Wert 1 abgezogen werden
// - Im vierten then-Block soll für jeden Wert Modulo 2 ermittelt werden
// - Im fünften then-Block sollen die Werte auf die Konsole geloggt werden
// - Gib im catch-Block den Fehler auf der Konsole aus
// - Gib im finally-Block “Finished” auf der Konsole aus

// (Diese Aufgabe nur mit viel Hilfe gelöst bekommen)

const getNumbers = (): Promise<number[]> => {
    return new Promise<number[]>((resolve, reject) => {
        const numberArr: number[] = [];
        
        while (numberArr.length < 3) {
            const randomNum: number = Math.ceil(Math.random() * 130);
            numberArr.push(randomNum);
        }
// Überprüfen, ob eine Zahl größer als 100 ist, mit for-Schleife 
        for (let i = 0; i < numberArr.length; i++) {
            if (numberArr[i] > 100) {
                return reject("Eine Zahl ist größer als 100!"); 
            }
        }
// Wenn keine Zahl größer als 100 ist, das Array auflösen 
        resolve(numberArr);
    });
};

getNumbers()
    .then(response => {
    console.log(response)
    return response.map(num => num + 7);
    })
    .then(response => {
    console.log(response)
    return response.map(num => num * 2);
    })
    .then(response => {
    console.log(response)
    return response.map(num => num - 1);
    })
    .then(response => {
    console.log(response)
    return response.map(num => num % 2);
    })
    .then(response => {
    console.log(response);
    })
    .catch(err => console.error(err))
    .finally(() => console.log("Finished"));