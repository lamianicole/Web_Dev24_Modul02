const generateLottoNumber(): number | undefined => {
    // weil ich in Zeile 1 number erwarte, bin ich zu return verpflichtet
    const randomZahl: number = Math.floor(Math.random() * 99 + 1);
    // bei random numbers immer ceil oder floor nehmen
    // Zufallszahl 0 bis 100 generieren
    console.log(randomZahl);
    try {
        if (randomZahl > 49){
            throw new Error("Number is smaller than 49")
        } return randomZahl;
    } catch (error) {
        console.error(error);
        // return undefined
    }
} 
generateLottoNumber()
// das return kommt, wenn try-catch fertig
// console.error() ist wie console.log
// array ist guter Freund der Schleife


// Version 1: 7 zufällige Zahlen, die in einem Array gespeichert wurden
// const lottoResults: number [] = []
// for (let i = 0; lottoResults.length < 7; i++ ) {
//     const lottoNumber = generateLottoNumber()
//     if (lottoNumber && !lottoResults.includes(lottoNumber)){
//         lottoResults.push(lottoNumber)
//     }
// }

// console.log(lottoResults);


// Version 2
while (lottoResults.length < 7) {
    const lottoNumber = generateLottoNumber();


}