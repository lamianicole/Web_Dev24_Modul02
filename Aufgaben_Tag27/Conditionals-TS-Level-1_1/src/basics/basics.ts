// Aufg. eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Function adult().

// Variablen erstellen
let ageInput = document.querySelector('#ageInput') as HTMLInputElement;
let checkBtn = document.querySelector('#checkBtn') as HTMLInputElement;
let result = document.querySelector('#result') as HTMLInputElement;
// prüfen
console.log(ageInput);
console.log(checkBtn);

// Im Funktionskörper:  
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.  Ist das eingegebene Alter kleiner als 18, gib false zurück.  Lass Dir das Ergebnis der Function im HTML in “Volljährig” oder “Minderjährig” ausgeben.

// button prüfen
if(checkBtn){
    checkBtn.addEventListener('click', () => {
        console.log("test");   
    })
}   

function adult() {
    let personAge: number = Number(ageInput.value);
    if (personAge >= 18) {
        return (result.innerHTML = "volljährig");
    } else {
        return (result.innerHTML = "minderjährig");
    }
}

checkBtn.addEventListener('click', adult);