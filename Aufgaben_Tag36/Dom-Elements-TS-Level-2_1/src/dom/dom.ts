// Level 2_1
// Schreibe eine Function, die beim Anklicken des “Change me” Buttons den Home Button ändert.

const navChange = document.getElementById('navChange') as HTMLAnchorElement;
console.log(navChange);

const navHome = document.getElementById('navHome') as HTMLAnchorElement;
console.log(navHome);

let clickChange = true;
// Boolean. Originalzustand

navChange?.addEventListener('click', () => {
    if(navHome) { 
        if(clickChange) {
            navHome.textContent = 'Home';   
            navHome.style.backgroundColor = "";
            navHome.style.color = "";
        } else {
            navHome.textContent = 'emoH'; 
            navHome.style.backgroundColor = 'pink';
            navHome.style.color = 'black';
        }
        clickChange = !clickChange; 
        // toggle, beim nächsten Klick wieder gegenteiliger Zustand
    }
});

// NOT-Operator geht nur mit boolean 