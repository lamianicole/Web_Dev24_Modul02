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
                console.log("Das Wetter ist schlecht");
                output.textContent="Wetter ist schlecht"
        }
        else if(Number(inputNumber.value) <=5 ){
                console.log("Das Wetter ist ok");
                output.textContent="Das Wetter ist ok";      
        }
        else if(Number(inputNumber.value) <= 7){
            console.log("Das Wetter ist gut");
            output.textContent="Das Wetter ist gut";
        }
        else if(Number(inputNumber.value) <= 10){
            console.log("Das Wetter ist ein Traum. Raus mit dir!");
            output.textContent="Das Wetter ist ein Traum. Raus mit dir!";
        }
    })
}