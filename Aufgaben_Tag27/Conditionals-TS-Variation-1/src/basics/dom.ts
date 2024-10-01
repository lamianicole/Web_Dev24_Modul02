const inputNumber = document.querySelector('#inputNumber') as HTMLInputElement;

const sendenBtn = document.querySelector('#sendenBtn') as HTMLInputElement;

const output = document.querySelector('#output') as HTMLElement;
console.log(output);
console.log(inputNumber);
console.log(7);
console.log(sendenBtn);

if(sendenBtn){
    sendenBtn.addEventListener('click', ()=> {
        console.log(inputNumber.value);
        if(Number(inputNumber.value) <= 3) {
            console.log("Deine Stimmung ist am Tiefpunkt. Geh spazieren und erfreue dich an der Natur");
            output.textContent="Deine Stimmung ist am Tiefpunkt. Geh spazieren und erfreue dich an der Natur"   
        }
        else if(Number(inputNumber.value) <= 7) {
            console.log("Deine Stimmung ist ok, triff Freunde und du fühlst dich gleich noch besser");
            output.textContent="Deine Stimmung ist ok, triff Freunde und du fühlst dich gleich noch besser"
        }
        else if(Number(inputNumber.value) <= 10) {
            console.log("Deine Stimmung ist top. Gekrönt wird sie durch ein Eis deiner Wahl");
            output.textContent="Deine Stimmung ist top. Gekrönt wird sie durch ein Eis deiner Wahl";
        }
    })
}


