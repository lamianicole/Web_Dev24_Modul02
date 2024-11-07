import WeatherType from "./Weather-type";

const weatherPrediction: Promise<WeatherType> = new Promise((resolve, reject) => {
    const randomNumber: number = Math.floor(Math.random() * 9)
    // console.log(randomNumber);
    if (randomNumber < 7) {
        resolve (randomNumber)
    } else {
        reject ("Weather forecast could not be determined")
    }
})

console.log(weatherPrediction);


weatherPrediction.then((response: WeatherType) => {
    console.log(WeatherType[response])
})
    .catch((error) => {
        console.error(error)
    })

    
// response ist ein Standard-Placeholder/Parameter 
// Wenn das Promise erfolgreich abgeschlossen ist, wird die Funktion im then-Block aufgerufen. response ist der Wert, den das Promise zurückgibt. Hier erwarten wir, dass es ein WeatherType ist.
// Zum Beispiel: Wenn response WeatherType.Sunny ist, wird console.log Sunny ausgeben.
// catch((err) => {...}): Diese Methode fängt jeden Fehler ab, der während der Promise-Ausführung auftritt.
// Wenn ein Fehler auftritt, wird die Funktion im catch-Block ausgeführt.
