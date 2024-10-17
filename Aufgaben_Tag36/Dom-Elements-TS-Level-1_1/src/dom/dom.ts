const inputText = document.getElementById('inputText') as HTMLInputElement;
console.log(inputText);

const addBtn = document.getElementsByTagName('button');
// Zugriff auf alle button-elemente, gibt HTML Collection zurück
console.log(addBtn[0]);
// hier index 0, um das erste button element auszugeben

const myList = document.querySelector("#myList") as HTMLUListElement;
console.log(myList);

addBtn[0]?.addEventListener('click', () => {
    console.log(inputText.value);  
    const createList = document.createElement("li"); 
    createList.textContent = inputText.value; 
    myList?.appendChild(createList);
inputText.value = '' 
})


// myList?.appendChild(createList);
// fügt neues List element zu ul hinzu

// inputText.value = '' 
// Das Input-Feld soll nach jedem Hinzufügen geleert werden, es setzt also Wert d. Inputfeldes auf leere Zeichenkette, um es nach Hinzufügen des neuen list element zu leeren
