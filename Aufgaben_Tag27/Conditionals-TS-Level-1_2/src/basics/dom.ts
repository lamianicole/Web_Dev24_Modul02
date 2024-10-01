// Variablen erstellen. #inputNumber ist id aus html und zugleich hier Variable. Mit querySelector greife ich von TS aufs html-Element zu
const inputNumber = document.querySelector('#inputNumber') as HTMLInputElement;

const sendenBtn = document.querySelector('#sendenBtn') as HTMLInputElement;

const output = document.querySelector('#output') as HTMLElement;
console.log(output);

// mit console.log als Erstes prüfen, ob Elemente vorhanden sind
console.log(inputNumber);
console.log(5);

console.log(sendenBtn);
// Event als Erstes testen mit console.log und im Browser draufklicken. ()=> ist die Callbackfunktion/1. Wert = Aktion
// Number: string (z.B. 5) muss in number umgewandelt werden!
if(sendenBtn){
    sendenBtn.addEventListener('click', ()=> {
        console.log("test");
        console.log(inputNumber.value);
        if(Number(inputNumber.value) <= 2){
                console.log("Wetter ist schlecht");
                output.textContent="Wetter ist schlecht"
        }
        else if(Number(inputNumber.value) <= 5){
                console.log("Wetter ist gut");
                output.textContent="Wetter ist gut";      
        }
        else if(Number(inputNumber.value) <= 8){
            console.log("Wetter ist Knaller");
            output.textContent="Wetter ist Knaller";
        }
    })
}






















// if(inputNumber){
//     const inputValue = inputNumber.value
//     console.log(inputNumber);
    
// }

// if(sendenBtn){
//     sendenBtn.addEventListener('click', ()=>{
//         console.log(`nach dem Klick: ${inputNumber.value} `);
//     })
// }



// function weather(inputNumber: number){
//     if (inputNumber >= 8 && <= 10){
//         console.log("Super");
        
//     }
// }
// if (sendenBtn){
//     sendenBtn.addEventListener('click', >= 8 && <= 10 {
//         console.log(inputNumber.value);
//         headline.textContent = `Super`;
        
        
//     }
// // }
// }

