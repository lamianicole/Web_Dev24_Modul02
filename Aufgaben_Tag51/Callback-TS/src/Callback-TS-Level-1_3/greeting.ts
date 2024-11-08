const sayHello = (name: string, callback: (message: string) => void): void => {
    const greeting = `Good morning, ${name}!`; 
    callback(greeting); 
};
// console.log(sayHello);

const greetingCallback = (message: string): void => {
    console.log(message);
};
// console.log(greetingCallback);

sayHello("Richard Castle", greetingCallback);
sayHello("Kate Beckett", greetingCallback);
sayHello("Javier Esposito", greetingCallback);
sayHello("Kevin Ryan", greetingCallback);

