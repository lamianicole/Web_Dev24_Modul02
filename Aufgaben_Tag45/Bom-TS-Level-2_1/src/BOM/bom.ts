const count = document.querySelector("#count") as HTMLDivElement;
const message = document.querySelector(".message") as HTMLDivElement;

// Arrow function, die keinen Wert zurückgibt
const countdown = () => {
    let counter: number = 10;
    const interval = setInterval(() => {
        counter--;
        count.textContent = `${counter}`;
        if (counter === 0) {
            clearInterval(interval);
            message.style.display = "none";
        }
    }, 2000);
};

countdown();

