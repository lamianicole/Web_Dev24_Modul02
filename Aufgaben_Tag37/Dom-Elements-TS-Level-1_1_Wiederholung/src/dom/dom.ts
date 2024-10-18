const inputText = document.querySelector('#inputText') as HTMLInputElement;
console.log(inputText);

const button = document.querySelector('button') as HTMLButtonElement;
console.log(button);

const myList = document.querySelector('#myList') as HTMLElement;
console.log(myList);

button?.addEventListener('click', () => {
    console.log(inputText.value);  
    const createList = document.createElement("li"); 
    createList.textContent = inputText.value; 
    myList?.appendChild(createList);
    inputText.value = "" 
});

