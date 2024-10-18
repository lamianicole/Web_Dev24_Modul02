const example = document.getElementsByClassName("example") as HTMLCollectionOf<HTMLElement>;

const button = document.querySelector("button") as HTMLButtonElement;
console.log(button);

let originalFarbe = true;
button.addEventListener('click', () => {
    for(let i: number = 0; i < example.length; i++) {
        const element = example[i] as HTMLElement;
        if(originalFarbe) {
            element.style.backgroundColor = "#000";
            element.style.color = "#fff";
        } else {
            element.style.backgroundColor = "";
            element.style.color = "";
        }
    };
    originalFarbe = !originalFarbe;
});