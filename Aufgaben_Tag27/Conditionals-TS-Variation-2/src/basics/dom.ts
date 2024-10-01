const inputNumber = document.querySelector('#inputNumber') as HTMLInputElement;

const sendenBtn = document.querySelector('#sendenBtn') as HTMLInputElement;

const output = document.querySelector('#output') as HTMLElement;
console.log(output);
console.log(inputNumber);
console.log(4);
console.log(sendenBtn);

if(sendenBtn){
    sendenBtn.addEventListener('click', ()=> {
        console.log(inputNumber.value);
        if(Number(inputNumber.value) === 1) {
            console.log("1 - Der Berg ruft! Wandern, Bergsteigen, Wellness, all das findest du in Südtirol");
            output.textContent="1 - Der Berg ruft! Wandern, Bergsteigen, Wellness, all das findest du in Südtirol"   
        }
        if(Number(inputNumber.value) === 2) {
            console.log("2 - Dschungel-Fieber. Erkunde die Regenwälder Costa Ricas, für noch mehr Action besuch den Arenal, einen Feuer speienden Vulkan");
            output.textContent="2 - Dschungel-Fieber. Erkunde die Regenwälder Costa Ricas, für noch mehr Action besuch den Arenal, einen Feuer speienden Vulkan"
        }
        else if(Number(inputNumber.value) === 3) {
            console.log("3 - Reif für die Insel. Ihre Auszeit beginnt auf dem Berlengas-Archipel, Portugal");
            output.textContent="3 - Reif für die Insel. Ihre Auszeit beginnt auf dem Berlengas-Archipel, Portugal";
        }
        else if(Number(inputNumber.value) === 4) {
            console.log("4 - Kalsarikännit - sich in Unterhose betrinken.  Mach es wie die Finnen und lass dich zu Hause mal so richtig gehen");
            output.textContent="4 - Kalsarikännit - sich in Unterhose betrinken.  Mach es wie die Finnen und lass dich zu Hause mal so richtig gehen";
        }
        else if(Number(inputNumber.value) === 5) {
            console.log("5 - Kunst, Kultur, Kulinarik. Deine Städtereise geht nach Budapest");
            output.textContent="5 - Kunst, Kultur, Kulinarik. Deine Städtereise geht nach Budapest";
        }
    })
}
